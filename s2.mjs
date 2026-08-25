import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
for (const [u,n] of [['/','home'],['/resultados','resultados']]) {
  await p.goto('http://localhost:3400'+u, { waitUntil:'networkidle' });
  await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visivel')));
  await p.waitForTimeout(700);
  await p.screenshot({ path:`/tmp/${n}.png`, fullPage:true });
  console.log(n,'ok');
}
await b.close();
