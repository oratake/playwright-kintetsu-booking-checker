import { test, expect, type Page } from '@playwright/test';

test('近鉄の予約ページを訪問する', async ({ page }) => {
    await page.goto('https://www.ticket.kintetsu.co.jp/KWSInqVacant');
    // await page.goto('https://www.ticket.kintetsu.co.jp/M/MET/MET60.do?op=pDisplayExpVacGid&ps001=g');
    await page.locator('#ci200').selectOption('0413');
    await page.locator('#ci203').selectOption('10');
    await page.locator('#ci204').selectOption('00');
    await page.locator('#ci206').click();
    await page.locator('#sp-search-select-station1-js').click();
    await page.getByRole('link', { name: '大阪阿部野橋' }).first().click();
    await page.locator('#sp-search-select-station2-js').click();
    await page.locator('#sp-search-select-station-area2').getByText('や行').click();
    await page.getByRole('link', { name: '吉野', exact: true }).click();
    await page.getByRole('link', { name: '検索開始' }).click();
    // await page.screenshot({ path: 'sampleimage.jpg' });

    // assertion
    // form#MET60Model[name="form0"]
    //   .sp-selecttrain-train-number 9009列車などの車番。spanかかってるからtextとして引き出した方が良さそう
    //   #depTime1 (出発時間はこれで確認)
    // #sp-accordion-infoarea1 > div.sp-selecttrain-conditionarea
    // await expect('#sp-accordion-infoarea1 img.sp-selecttain-trainiconarea').filter({ hasText: 'デラックス' }).toHaveAttribute('url', 'icon-x-l.png');
    // await expect(true).toBe(true);
});

/**
<div class="sp-selecttrain-conditionarea">
    <div class="sp-selecttrain-condition2">
        <span>
            <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-x-l.png">
        </span>
        <span class="sp-seat-type">
            <a href="#" onclick="openSeatTypeWindow('/sp/M/MZZ/MZZZZ/img/dxSymphonyJa.jpg');return false;">
                デラックス
            </a>
        </span>
        <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-car-m.png">
    </div>
    <div class="sp-selecttrain-condition2">
        <span>
            <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-x-l.png">
        </span>
        <span class="sp-seat-type">
            <a href="#" onclick="openSeatTypeWindow('/sp/M/MZZ/MZZZZ/img/salonSymphonyJa.jpg');return false;">
                サロン
            </a>
        </span>
    </div>
    <div class="sp-selecttrain-condition2">
        <span>
            <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-x-l.png">
        </span>
        <span class="sp-seat-type">
            <a href="#" onclick="openSeatTypeWindow('/sp/M/MZZ/MZZZZ/img/twinSymphonyJa.jpg');return false;">
                ツイン
            </a>
        </span>
    </div>
</div>

 */





/**
<div class="sp-selecttrain-info">
                    <div class="sp-selecttrain-traininfoarea">
                        
                        <div class="sp-selecttain-train-linkarea">
                            
                                    <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/blue-symphony.gif">
                                    <a class="sp-link-blank" href="https://www.kintetsu.co.jp/senden/blue_symphony/" target="_blank">
                                        青の交響曲(ｼﾝﾌｫﾆｰ)
                                    </a>
                                
                        </div>
                        
                        <div class="sp-selecttrain-train-number">
                            <span>
                                9009列車
                            </span>
                        </div>
                        
                            <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-sales-legend.png">
                        
                    </div>

                    
                    <div class="sp-selecttrain-conditionarea">
                        
                            <div class="sp-selecttrain-condition2">
                                
                                <span>
                                    <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-x-l.png">
                                </span>
                                
                                <span class="sp-seat-type">
                                    
                                            <a href="#" onclick="openSeatTypeWindow('/sp/M/MZZ/MZZZZ/img/dxSymphonyJa.jpg');return false;">
                                                デラックス
                                            </a>
                                        
                                </span>
                                
                                        <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-car-m.png">
                                    
                            </div>
                        
                            <div class="sp-selecttrain-condition2">
                                
                                <span>
                                    <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-x-l.png">
                                </span>
                                
                                <span class="sp-seat-type">
                                    
                                            <a href="#" onclick="openSeatTypeWindow('/sp/M/MZZ/MZZZZ/img/salonSymphonyJa.jpg');return false;">
                                                サロン
                                            </a>
                                        
                                </span>
                                
                            </div>
                        
                            <div class="sp-selecttrain-condition2">
                                
                                <span>
                                    <img class="sp-selecttain-trainiconarea" src="/sp/M/MZZ/MZZZZ/img/icon-x-l.png">
                                </span>
                                
                                <span class="sp-seat-type">
                                    
                                            <a href="#" onclick="openSeatTypeWindow('/sp/M/MZZ/MZZZZ/img/twinSymphonyJa.jpg');return false;">
                                                ツイン
                                            </a>
                                        
                                </span>
                                
                            </div>
                        
                    </div>
                </div>
		**/
