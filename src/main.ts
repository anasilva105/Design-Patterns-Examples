console.log("main.ts");
import fs from "fs";

const { npm_config_pattern } = process.env;
const design_patterns_folder_name: string = "designpatterns";

if(npm_config_pattern){
    try{
        const design_pattern_folder_exists: boolean = fs.existsSync(`${__dirname}/${design_patterns_folder_name}`);
        if(design_pattern_folder_exists){
            const { init }: { init: (pattern_type: string) => void } = require(`${__dirname}/${design_patterns_folder_name}/init`);
            init(npm_config_pattern);
        }else{
            console.error(`Failed to find init function in <${design_patterns_folder_name}> folder.`);
        }
    }catch(exception){
            console.error(exception);
    }
}