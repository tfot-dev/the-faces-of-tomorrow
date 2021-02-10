export const joinTitles = (set: Set<string>): string => Array.from(set)?.join(' | ');

export const getPostTitle = (caption: string): string => {
    const titleSet = new Set<string>();

    titleSet.add('TFOT');

    const userName = getName(caption);
    if (userName) {
        titleSet.add(userName);
    }

    const instaHandle = getInstaHandle(caption);
    if (instaHandle) {
        titleSet.add(instaHandle);
    }

    return joinTitles(titleSet);
};

export const getName = (caption: string): string | undefined => {
    // Name is a Age || Name is age
    let regex = /(?<name>[a-zA-Z ]+) is (a )?(\d)+/gim;

    const matchResults = regex.exec(caption);
    if (matchResults?.groups?.name) {
        return matchResults?.groups?.name;
    }

    // Name, Age
    regex = /(?<name>\w+\s\w+)(?:, \d)+/gim;

    const results = caption.matchAll(regex);
    const names = new Set<string>();

    let result = results.next();
    while (!result.done) {
        if (result.value.groups?.name) {
            names.add(result.value.groups.name);
        }
        result = results.next();
    }

    return joinTitles(names);
};

export const getInstaHandle = (caption: string): string | undefined => {
    const regex = /(@\S+\b)(?!.*\1\b)/gim;

    const matchResults = caption.match(regex);

    return joinTitles(new Set(matchResults));
};
