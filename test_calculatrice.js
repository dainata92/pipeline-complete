const { Builder, By, Key } = require('selenium-webdriver');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async function testCalculatrice() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('file:///Users/dainata/Desktop/desCodeuse/Bloc3/selenium/tp/index.html');
        await sleep(5000);
        // --- Test 1 : Vérifier l'Addition ---
        const n1 = await driver.findElement(By.id('number1'));
        await n1.click();
        await n1.sendKeys(4);

        const n2 = await driver.findElement(By.id('number2'));
        await n2.click();
        await n2.sendKeys(4);

        const add = await driver.findElement(By.xpath("//option[text()='Addition']"));
        await add.click();
        // Afficher les résultats
        const calcule = await driver.findElement(By.id('calculate'));
        await calcule.click();
        await sleep(3000);
        const resultElement = await driver.findElement(By.id('result'));
        const resultText = await resultElement.getText();
        console.log('Résultat affiché addition:', resultText);
        await sleep(2000);
        await n1.clear();
        await n2.clear();
        


        // --- Test 2 : Division par Zéro ---
        await n1.click();
        await n1.sendKeys(4);
        await n2.click();
        await n2.sendKeys(0);
        const div = await driver.findElement(By.xpath("//option[text()='Division']"));
        div.click();
        await calcule.click();
         await sleep(3000);
         
        // Afficher les résultats
        const resultElement1 = await driver.findElement(By.id('result'));
        const resultText1 = await resultElement1.getText();
        console.log('Résultat affiché division', resultText1);
         await sleep(2000);

        // --- Test 3 : Entrée Non Valide ---
        await n1.clear();
        await n2.clear();
        

        await n1.click();
        await n1.sendKeys(4);
        await n2.click();
        await n2.sendKeys();
        const err = await driver.findElement(By.xpath("//option[text()='Addition']"));
        err.click();
        await calcule.click();
         await sleep(3000);

        // Afficher les résultats
        const resultElement2 = await driver.findElement(By.id('result'));
        const resultText2 = await resultElement2.getText();
        console.log('Veuillez entrer des nombres valides.', resultText2);
         await sleep(2000);


        // --- Test 4 : Vérifier la Soustraction ---
        await n1.clear();
        await n2.clear();
        await n1.click();
        await n1.sendKeys(4);
        await n2.click();
        await n2.sendKeys(4);
        const sous = await driver.findElement(By.xpath("//option[text()='Soustraction']"));
        await sous.click();
        await calcule.click();
        await sleep(3000);
        
        // Afficher les résultats
        const resultElement3 = await driver.findElement(By.id('result'));
        const resultText3 = await resultElement3.getText();
        console.log('Résultat affiché soustraction.', resultText3);
         await sleep(2000);

    } finally {
        await driver.quit();
    }
})();

