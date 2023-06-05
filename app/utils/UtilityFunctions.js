export function formatDate(date) {
    date = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

export function minuteToHours(minutes = 10) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = String(hours).padStart(2);
    const formattedMinutes = String(remainingMinutes).padStart(2);

    return `${formattedHours} hours, ${formattedMinutes} minutes`;
}

export function getLanguageName(langCode = 'en') {
    const languageName = new Intl.DisplayNames([navigator.language], { type: 'language' }).of(langCode);
    return languageName;
}
