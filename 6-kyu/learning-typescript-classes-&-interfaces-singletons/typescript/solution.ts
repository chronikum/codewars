export class SingletonCounter {
  static instance = SingletonCounter.getInstance();
  
  private counter = 0;
  
  public static getInstance(): SingletonCounter {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }
    return SingletonCounter.instance;
  }
  
  private constructor() {
    
  }
  
  public inc() {
    this.counter++;
    return this.counter;
  }
  
  
}
