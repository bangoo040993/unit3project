require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Potions', sortOrder: 10},
    {name: 'Mage', sortOrder: 20},
    {name: 'Archer', sortOrder: 30},
    {name: 'Warrior', sortOrder: 40},
    {name: 'Healer', sortOrder: 50},
    {name: 'Acessories', sortOrder: 60},
    {name: 'Echantment Stone', sortOrder: 70},
  

  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Health Potion', emoji: '/img/Hp.png', category: categories[0], price: 6.99},
    {name: 'Mana Potion', emoji: '/img/Mana.png', category: categories[0], price: 6.99},
    {name: 'Stamina Potion', emoji: '/img/Stamina.png', category: categories[0], price: 9.99},
    {name: 'Phoenix Down', emoji: '/img/PhoenixDown.png', category: categories[0], price: 33.30},
    {name: 'Mythic Void Staff', emoji: '/img/staff.png', category: categories[1], price: 333.33},
    {name: 'Mythic Hat ', emoji: '/img/wizardhat.png', category: categories[1], price: 222.33},
    {name: 'Mythic Robe', emoji: '/img/wizardpant.png', category: categories[1], price: 111.33},
    {name: 'Mythic Pant', emoji: '/img/wizardrobe.png', category: categories[1], price: 99.99},
    {name: 'WoodLand Bow', emoji:'/img/bow.png', category: categories[2], price: 66.99},
    {name: 'WoodLand Cowl', emoji: '/img/archerhat.png', category: categories[2], price: 57.99},
    {name: 'WoodLand Shirt', emoji: '/img/archershirt.png', category: categories[2], price: 33.33},
    {name: 'WoodLand Pant', emoji: '/img/archerpant.png', category: categories[2], price: 42.33},
    {name: 'Ender Spear', emoji: '/img/spear.png', category: categories[3], price: 666.99},
    {name: 'Ender Helm', emoji: '/img/enderhelm.png', category: categories[3], price: 444.99},
    {name: 'Ender Platebody', emoji: '/img/enderbody.png', category: categories[3], price: 666.66},
    {name: 'Ender Skirt', emoji: '/img/enderleg.png', category: categories[3], price: 555.99},
    {name: 'Druid Staff', emoji:'/img/druidstaff.png', category: categories[4], price: 222.33},
    {name: 'Druid Hat', emoji: '/img/druid.png', category: categories[4], price: 111.99},
    {name: 'Druid Robe', emoji: '/img/druidbody.png', category: categories[4], price: 99.99},
    {name: 'Druid Skirt', emoji: '/img/druidleg.png', category: categories[4], price: 88.33},
    {name: 'Necromancer ring', emoji: '/img/necro.png', category: categories[5], price: 666},
    {name: 'Druid Pendant', emoji: '/img/druingpend.png', category: categories[5], price: 111},
    {name: 'Trinity Pendant', emoji: '/img/trinity.png', category: categories[5], price: 333},
    {name: 'ArcCovenant Pendant', emoji: '/img/arcpendent.png', category: categories[5], price: 222},
    {name: 'Dark Infinity Stone', emoji: '/img/dark.png', category: categories[6], price: 999},
    {name: 'Lightning Infinity Stone', emoji: '/img/lightning.png', category: categories[6], price: 333},
    {name: 'Fire Elementalist Stone', emoji: '/img/ember.png', category: categories[6], price: 333},
    {name: 'Poison Essence Stone', emoji: '/img/poison.png', category: categories[6], price: 333},
  ]);

  console.log(items)

  process.exit();

})();