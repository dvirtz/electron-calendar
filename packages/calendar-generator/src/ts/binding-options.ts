import { Options } from 'pkg-prebuilds';
import * as meta from '../../package.json';

const options: Options = {
  name: 'calendar-generator',
  napi_versions: meta.binary.napi_versions,
};

export = options;
