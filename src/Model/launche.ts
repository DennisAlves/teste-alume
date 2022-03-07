export class launche{
    
    private nome: string = ""
    private description: string = ""
    private from: string = ""
    private to: string = ""
    private windowStart: string = ""

    constructor(nome: string, description: string,from: string, to: string, windowStart: string){
        this.nome = nome;
            this.description = description;
            this.from = from;
            this.to = to;
            this.windowStart = windowStart;
    };

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

    get getWindowStart(): string {
        return this.windowStart;
    }

    set setWindowStart(value: string) {
        this.windowStart = value;
    }
}