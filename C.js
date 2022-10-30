class EarthRoute {
  static vault = [];
  transfer(parcel) {
    parcel.destination = 'Earth';
    EarthRoute.vault.push(parcel);
  }
}
class MoonRoute {
  static warehouse = [];
  transfer(parcel) {
    parcel.destination = 'Moon';
    MoonRoute.warehouse.push(parcel);
  }
}

function extendTransportSystem(ER, MR) {
  const store = [];

  ER.prototype.transfer = function (parcel) {
    parcel.destination = 'Earth';
    ER.vault.push(parcel);
    return store.push({
      ...parcel,
      origin: 'Earth',
      destination: 'Mothership',
    });
  };

  MR.prototype.transfer = function (parcel) {
    parcel.destination = 'Moon';
    MR.warehouse.push(parcel);
    store.push({
      ...parcel,
      origin: 'Moon',
      destination: 'Mothership',
    });
  };

  return store;
}

const mothershipStorage = extendTransportSystem(EarthRoute, MoonRoute);

const earthRoute1 = new EarthRoute();
const moonRoute1 = new MoonRoute();

earthRoute1.transfer({ content: 123 });
moonRoute1.transfer({ text: '1213' });
earthRoute1.transfer({ family: ['father', 'mother', 'kid'] });
moonRoute1.transfer({ money: 121300000 });

console.log(mothershipStorage);
console.log(EarthRoute.vault);
console.log(MoonRoute.warehouse);
