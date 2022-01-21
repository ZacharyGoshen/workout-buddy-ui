export class DateFormatter {
    
    static format(dateString: string): string {
        let date: Date = new Date(dateString);
        return date.toDateString();
    }

}