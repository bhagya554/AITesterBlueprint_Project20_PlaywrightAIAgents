class WebDriver{
    protected url:string;

    constructor(url:string){
        this.url=url;
    }

   protected navigate():void{
        console.log(`Navigating to ${this.url}`);
    }
}

class ChromeDriver extends WebDriver{
    constructor(url:string){
        super(url);
    }

    lauchBrowser():void{
        console.log("Launching Chrome Browser");
        this.navigate(); //accessing the protected method of the parent class
    }
}

class FirefoxDriver extends WebDriver{
    constructor(url:string){
        super(url);
    }

    lauchBrowser():void{
        console.log("Launching Firefox Browser");
        this.navigate(); //accessing the protected method of the parent class
    }
     
}

var chrome=new ChromeDriver("https://www.google.com");
chrome.lauchBrowser(); //Launching Chrome Browser
 //Navigating to https://www.google.com

var firefox=new FirefoxDriver("https://www.redbus.com");
firefox.lauchBrowser(); //Launching Firefox Browser
//firefox.navigate(); //error - navigate is a protected method and can be accessed only within the class and its subclasses