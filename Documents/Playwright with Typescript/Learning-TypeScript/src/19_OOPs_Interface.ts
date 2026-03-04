interface Webdriver{
    browser:string
    getTitle():string;
    getUrl():string;
}

interface RemoteWebDriver {
    launchBrowser():void;
}
class Chrome implements Webdriver,RemoteWebDriver{
    launchBrowser(): void {
        console.log("Launching Chrome Browser");
    }
    browser: string="Chrome Browser";
    getTitle(): string {
        return "Getting title of the page in "+this.browser;
    }
    getUrl(): string {
        return "Getting url of the page in "+this.browser;
    }
   

}

class Firefox implements Webdriver,RemoteWebDriver{
    browser: string="Firefox Browser";
    launchBrowser(): void {
        console.log("Launching Firefox Browser");
    }
   
    getTitle(): string {
        return "Getting title of the page in "+this.browser;
    }
    getUrl(): string {
        return "Getting url of the page in "+this.browser;
    }

}

const chrome2=new Chrome();
chrome2.launchBrowser();
console.log(chrome2.getTitle());
console.log(chrome2.getUrl());
const firefox2=new Firefox();
firefox2.launchBrowser();
console.log(firefox2.getTitle());
console.log(firefox2.getUrl());

