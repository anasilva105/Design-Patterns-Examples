import fs from "fs";

export function init(pattern_type: string): void {
    const design_patterns_folders: string[] = fs.readdirSync(__dirname)
        .filter((content_name: string) => fs.lstatSync(`${__dirname}/${content_name}`).isDirectory());
    const [ selected_pattern_type ]: string[] = design_patterns_folders
        .filter((folder_name: string) => fs.existsSync(`${__dirname}/${folder_name}/${pattern_type}`));
    if(selected_pattern_type){
        const { init }: { init: () => void } = require(`${__dirname}/${selected_pattern_type}/${pattern_type}/init`);
        init();
    }else{
        throw new Error(`${pattern_type} is not configured in the application.`);
    }
}
