"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = exports.setRolePermissions = exports.resetRolePermissions = exports.shuffleSongs = exports.generateCommands = exports.generateLength = exports.generateXP = exports.compare = exports.getUptime = exports.mock = exports.shorten = exports.clean = exports.numberWithCommas = void 0;
const fs = __importStar(require("fs"));
function numberWithCommas(numb) {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
exports.numberWithCommas = numberWithCommas;
function clean(text) {
    if (typeof text === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
        return text;
}
exports.clean = clean;
function shorten(string, maxLength, separator = ' ') {
    let array = [];
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
exports.shorten = shorten;
function mock(text) {
    let result = '';
    let next = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < text.length; ++i) {
        if (i === next) {
            result += text.charAt(i).toUpperCase();
            next += Math.floor(Math.random() * 3) + 1;
        }
        else {
            result += text.charAt(i);
        }
    }
    return result;
}
exports.mock = mock;
function getUptime(process) {
    const d = new Date(process);
    var str = '';
    str += d.getUTCMonth() + 'mo, ';
    str += d.getUTCDate() - 1 + 'd, ';
    str += d.getUTCHours() + 'h, ';
    str += d.getUTCMinutes() + 'm, ';
    str += d.getUTCSeconds() + 's';
    return str;
}
exports.getUptime = getUptime;
function compare(a, b) {
    if (a.position > b.position) {
        return -1;
    }
    if (a.position < b.position) {
        return 1;
    }
    return 0;
}
exports.compare = compare;
function generateXP() {
    let min = 2;
    let max = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.generateXP = generateXP;
function generateLength(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
exports.generateLength = generateLength;
function generateCommands(category, prefix) {
    let commandsListed = '';
    const group = fs.readdirSync(`./src/commands/${category}`);
    for (const command of group) {
        commandsListed += '``' + prefix + command.split('.')[0] + '``\n';
    }
    commandsListed = commandsListed.slice(0, -1);
    return commandsListed;
}
exports.generateCommands = generateCommands;
function shuffleSongs(songs) {
    for (let i = songs.length - 1; i > 1; i--) {
        const j = 1 + Math.floor(Math.random() * i);
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
}
exports.shuffleSongs = shuffleSongs;
async function resetRolePermissions(messageObject, role) {
    messageObject.guild.channels.cache.forEach(async (channel) => {
        await channel.updateOverwrite(role.id, {
            SEND_MESSAGES: null,
            ADD_REACTIONS: null,
            SPEAK: null,
            USE_VAD: null
        }, 'Removed overwrites for the old Muted role.');
    });
}
exports.resetRolePermissions = resetRolePermissions;
async function setRolePermissions(messageObject, role) {
    messageObject.guild.channels.cache.forEach(async (channel) => {
        await channel.createOverwrite(role.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK: false,
            USE_VAD: false
        }, 'Created overwrites for the Muted role.');
    });
}
exports.setRolePermissions = setRolePermissions;
class ProgressBar {
    constructor(value, maxValue, barSize) {
        this.value = value - 1;
        this.maxValue = maxValue;
        this.barSize = barSize;
    }
    createDurationBar() {
        const percentage = this.value / this.maxValue;
        const progress = Math.round((this.barSize * percentage));
        const emptyProgress = this.barSize - progress;
        const progressText = '—'.repeat(progress);
        const emptyProgressText = '—'.repeat(emptyProgress);
        const percentageText = Math.round(percentage * 100) + '%';
        const bar = '`' + progressText + '⚪' + emptyProgressText + '\n' + new Date(this.value).toISOString().substr(11, 8) + ' / ' + new Date(this.maxValue).toISOString().substr(11, 8) + '`';
        return bar;
    }
    createVolumeBar() {
        const percentage = this.value / this.maxValue;
        const progress = Math.round((this.barSize * percentage));
        const emptyProgress = this.barSize - progress;
        const progressText = '<:middle_full:730066734349942876>'.repeat(progress);
        const emptyProgressText = '<:middle_blank:730066734320582669>'.repeat(emptyProgress);
        const percentageText = Math.round(percentage * 100) + '%';
        const bar = '🔇 ' + progressText + emptyProgressText + ' 🔊';
        return bar;
    }
}
exports.ProgressBar = ProgressBar;
