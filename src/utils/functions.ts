import * as fs from 'fs';

export function numberWithCommas(numb: number) {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
} 
export function clean(text) {
    if (typeof text === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@​/g, '@​' + String.fromCharCode(8203));
    else return text;
}
export function shorten(string: string, maxLength: number, separator: string = ' ') {
    let array: Array < any > = [];

    if (string.length <= maxLength) {
        array.push(string);
        return array;
    }

    while (string.length >= maxLength) {
        array.push(string.substr(0, string.lastIndexOf(separator, maxLength)));
        string = string.substr(string.lastIndexOf(separator, maxLength));
    }
    array.push(string);

    return array;
}

export function mock(text: string) {
    let result: string = '';
    let next: number = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < text.length; ++i) {
        if (i === next) {
            result += text.charAt(i).toUpperCase();
            next += Math.floor(Math.random() * 3) + 1;
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

export function getUptime(process: any) {
    const d: Date = new Date(process);
    var str: string = '';
    str += d.getUTCMonth() + 'mo, ';
    str += d.getUTCDate() - 1 + 'd, ';
    str += d.getUTCHours() + 'h, ';
    str += d.getUTCMinutes() + 'm, ';
    str += d.getUTCSeconds() + 's';

    return str;
}

export function compare(a: any, b: any) {
    if (a.position > b.position) {
        return -1;
    }
    if (a.position < b.position) {
        return 1;
    }
    return 0;
}

export function generateXP() {
    let min: number = 2;
    let max: number = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateLength(x: any, in_min: any, in_max: any, out_min: any, out_max: any) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export function generateCommands(category: string, prefix: string) {
    let commandsListed: string = '';
    const group: Array < string > = fs.readdirSync(`./src/commands/${category}`);

    for (const command of group) {
        commandsListed += '``' + prefix + command.split('.')[0] + '``\n';
    }

    commandsListed = commandsListed.slice(0, -1);
    return commandsListed;
}

export function shuffleSongs(songs: any) {
    for (let i = songs.length - 1; i > 1; i--) {
        const j: number = 1 + Math.floor(Math.random() * i);
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
}

export async function resetRolePermissions(messageObject: any, role: any) {
    messageObject.guild.channels.cache.forEach(async channel => {
        await channel.updateOverwrite(role.id, {
            SEND_MESSAGES: null,
            ADD_REACTIONS: null,
            SPEAK: null,
            USE_VAD: null
        }, 'Removed overwrites for the old Muted role.');
    });
}

export async function setRolePermissions(messageObject: any, role: any) {
    messageObject.guild.channels.cache.forEach(async channel => {
        await channel.createOverwrite(role.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK: false,
            USE_VAD: false
        }, 'Created overwrites for the Muted role.');
    });
}

export class ProgressBar {
    value: any;
    maxValue: any;
    barSize: any;
    constructor(value: any, maxValue: any, barSize: any) {
        this.value = value - 1;
        this.maxValue = maxValue;
        this.barSize = barSize;
    }

    public createDurationBar() {
        const percentage: number = this.value / this.maxValue;
        const progress: number = Math.round((this.barSize * percentage));
        const emptyProgress: number = this.barSize - progress;

        const progressText: string = '—'.repeat(progress);
        const emptyProgressText: string = '—'.repeat(emptyProgress);
        const percentageText: string = Math.round(percentage * 100) + '%';
        const bar: string = '`' + progressText + '⚪' + emptyProgressText + '\n' + new Date(this.value).toISOString().substr(11, 8) + ' / ' + new Date(this.maxValue).toISOString().substr(11, 8) + '`';
        return bar;
    }

    public createVolumeBar() {
        const percentage: number = this.value / this.maxValue;
        const progress: number = Math.round((this.barSize * percentage));
        const emptyProgress: number = this.barSize - progress;

        const progressText: string = '<:middle_full:730066734349942876>'.repeat(progress);
        const emptyProgressText: string = '<:middle_blank:730066734320582669>'.repeat(emptyProgress);
        const percentageText: string = Math.round(percentage * 100) + '%';
        const bar = '🔇 ' + progressText + emptyProgressText + ' 🔊';
        return bar;
    }
}