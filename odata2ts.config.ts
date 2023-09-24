import {ConfigFileOptions, EmitModes, Modes} from "@odata2ts/odata2ts";


const config: ConfigFileOptions = {
  mode: Modes.all,
  emitMode: EmitModes.ts,
  services: {
    rhymba: {
      sourceUrl: 'https://search.mcnemanager.com/dev/content.odata/',
      source: 'src/resource/rhymba.xml',
      output: 'src/build/rhymba',
      prettier: true,
    },
  },
}

export default config;
