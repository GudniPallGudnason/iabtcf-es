import {GVL} from '@iabtechlabtcf/core';

export class GVLFactory {

  public static getVersion(version: number): GVL {

    return new GVL(require(`./vendorlist/vendor-list-v${version}.json`));

  }

  public static getLatest(): GVL {

    return new GVL(require('./vendorlist/vendor-list.json'));

  }

}
