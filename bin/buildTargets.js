const fs = require("fs");
require("./dotenv.js");
const { pullTarget, read, file } = require("./config");
const argv = require("minimist")(process.argv.slice(2));

const clean = (screenName) => screenName?.replace("@", "").toLowerCase();

const merge = (targets, twitters, options) => {
  const merged = targets.map((target) => {
    let r =
      twitters &&
      twitters.find(
        (d) => clean(d.screen_name) === clean(target.fields?.screen_name)
      );
    if (!r) {
      // todo, some formatting
      r = {
        procaid: target.id,
        name: target.name,
        country: target.area,
        description: target.fields.description,
        screenname: target.fields.screen_name,
        followers_count: 0,
        verified: false,
      };
    } else {
      r.procaid = target.id;
      r.name = target.name; //? not sure which one we want to keep
      //if (r.description && target.fields.description)
      r.description = target.fields.description;
      //if (r.description && target.fields.description)

      r.country = target.area;
    }
    if (options.meps) {
      r.description = target.fields.party;
      r.eugroup = target.fields.eugroup;
      if (target.fields.epid)
        r.profile_image_url_https =
          "https://www.europarl.europa.eu/mepphoto/" +
          target.fields.epid +
          ".jpg";
    }

    if (options.email) {
      r.email = target.emails[0].email;
    }

    if (options.display) {
      r.display = !!target.fields.display;
    }

    if (target.fields.salutation) r.salutation = target.fields.salutation;

    return r;
  });
  return merged;
};

/* proca format:
   {
    area: 'FI',
    externalId: 'rec0XJIF02o6UzWfk',
    fields: {
      description: 'Ministry of Agriculture and Forestry',
      name: 'Jari Leppä',
      screen_name: '@JariLeppa'
    },
    id: '2c10c12c-d78e-4696-ab57-926b487d74b5',
    name: 'Jari Leppä'
  },
 * twitter format:
 {
    id: 1092130388296826900,
    name: 'Erki Savisaar',
    screen_name: 'ErkiSavisaar',
    location: 'Tallinn, Estonia',
    description: 'Hariduselt IT-mees kuid rahva soovil edendan Eesti elu saadikuna Riigikogus',
    url: 'https://www.facebook.com/savisaarerki/',
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/1092137006040313857/3n9Rd92s_normal.jpg',
    followers_count: 19,
    lang: null,
    verified: false,
    country: ''
  }
*/
const saveTargets = (campaignName, targets) => {
  const fileName = file("target/public/" + campaignName);
  fs.writeFileSync(fileName, JSON.stringify(targets, null, 2));
  return fileName;
};

(async () => {
  const name = argv._[0];
  if (!name) {
    console.error(
      "need buildCampaign {name} [--email] [--display] [--meps[=committeeA,committeeB]]"
    );
    return;
  }
  const publicEmail = argv.email || false;
  const display = argv.display || false;
  const meps = argv.meps || false;

  try {
    const c = read("campaign/" + name); // the config file
    let targets = read("target/server/" + name); // the list of targets from proca server
    if (argv.source){
      const sources = read("target/source/" + name); // the list of targets from proca server
      const c = targets.filter (t => 

        -1 !== sources.findIndex(
        (d) => d.externalId === t.externalId
        )
      )
      console.log("total server vs source",targets.length,c.length);
      targets=c;
    }

    let twitters = null;
    try {
      twitters = read("target/twitter/" + name); // the list from twitter
    } catch (e) {
      console.log("no twitter list");
    }
    const d = merge(targets, twitters, {
      email: publicEmail,
      display: display,
      meps: meps,
    });
    //    const d = await pullCampaign(argv[0]);
    if (d) {
      d.sort((a, b) => b?.followers_count - a?.followers_count);
      const c = saveTargets(name, d);
      console.log("saved " + c);
    }
  } catch (e) {
    console.error(e);
    // Deal with the fact the chain failed
  }
})();
