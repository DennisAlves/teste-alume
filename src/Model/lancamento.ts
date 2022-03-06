export class Lancamento{
    
    private nome: string = ""
    private description: string = ""
    private from: string = ""
    private to: string = ""
    private windowStart: Date = new Date(0)
    
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    get getDescription(): string {
        return this.description;
    }

    set setDescription(value: string) {
        this.description = value;
    }

    get getFrom(): string {
        return this.from;
    }

    set setFrom(value: string) {
        this.from = value;
    }

    get getTo(): string {
        return this.to;
    }

    set setTo(value: string) {
        this.to = value;
    }

    get getWindowStart(): Date {
        return this.windowStart;
    }

    set setWindowStart(value: Date) {
        this.windowStart = value;
    }
}