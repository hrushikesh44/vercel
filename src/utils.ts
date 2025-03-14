const MAX_LEN = 6

export function generate(){
    let ans = '';
    const set = '123456789abcdefghijklmnopqrstuvwxyz';
    for( let i = 0; i < MAX_LEN; i++){
        ans += set[Math.floor(Math.random() * set.length)]
    }
    return ans;
}