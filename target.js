 console.log('target script ran');

var storedLegal = chrome.storage.local.get('newStorage', function (items) {
    console.log(items)

    //Item price
    document.getElementById('price__input').focus()
    document.execCommand('forwardDelete')
    document.execCommand('forwardDelete')
    document.execCommand('forwardDelete')
    document.execCommand('forwardDelete')
    document.execCommand('insertText', false, items.newStorage.src_productPrice)

    //Shipping (hard code to $5, I shouldn't need this many deletes but for some reason my browser defaults to $100 shipping?)
    // document.getElementById('national_shipping__manual__input').focus()
    // document.getElementById('national_shipping__manual__input').value = '5'
    // document.execCommand('forwardDelete')
    // document.execCommand('forwardDelete')
    // document.execCommand('forwardDelete')
    // document.execCommand('forwardDelete')
    // document.execCommand('forwardDelete')
    // document.execCommand('forwardDelete')
    // document.execCommand('insertText', false, '5')

    //Description
    document.getElementById('description').focus()
    document.execCommand('insertText', false, items.newStorage.src_productBrand + ' | ' + items.newStorage.src_productName)
    document.execCommand('insertParagraph', false) 
    document.execCommand('insertParagraph', false) 
    document.execCommand('insertText', false, items.newStorage.src_productDescription)
    document.execCommand('insertParagraph', false) 
    document.execCommand('insertParagraph', false) 
    document.execCommand('insertText', false, '#' + items.newStorage.src_productBrand)

    //Category and subcategory 
    var catAction = 1
    document.getElementsByClassName('sc-eEOqmf gjLpEj css-2b097c-container')[0].addEventListener("click", function() {
      if (catAction == 1) {
        console.log('filling category')
        document.execCommand('insertText', false, items.newStorage.src_productCategory)
        catAction = 2
      }
      else {
        //instead of focusing on the element id, we wait for a sec for the website to auto-focus there
        console.log('filling subcategory')
        setTimeout(() => {
          document.execCommand('insertText', false, items.newStorage.src_productSubCategory)
        }, 100)
        catAction = 1
      }
    });

    //Occasion (hard code 2 occasions)
    // This requires a mutation observer, which is actually more complex and might not be something that I need yet

    //Brand (currently, everytime you click on brand it enters Reformation)
    var brandAction = 1
    document.getElementsByClassName('sc-eEOqmf gjLpEj css-2b097c-container')[1].addEventListener('click', function() {
      if (brandAction == 1) {
        console.log('filling brand')
        document.execCommand('insertText', false, items.newStorage.src_productBrand)
        brandAction = 2
      }
      else {
        brandAction = 1
      }
    });

    //Source (hard code pre-loved)
    var sourceAction = 1
    document.getElementsByClassName('sc-eEOqmf gjLpEj css-2b097c-container')[4].addEventListener('click', function() {
      if (sourceAction == 1) {
        console.log('filling source')
        document.execCommand('insertText', false, 'Preloved')
        sourceAction = 2
      }
      else {
        sourceAction = 1
      }
    });

    //Style (hard code glam)
    var styleAction = 1
    document.getElementsByClassName('sc-eEOqmf gjLpEj css-2b097c-container')[6].addEventListener('click', function() {
      if (styleAction == 1) {
        console.log('filling style')
        document.execCommand('insertText', false, 'Glam')
        styleAction = 2
      }
      else {
        styleAction = 1
      }
    });

    //Location (hard code USA)
    var countryAction = 1
    document.getElementsByClassName('sc-eEOqmf gjLpEj css-2b097c-container')[7].addEventListener('click', function() {
      if (countryAction == 1) {
        console.log('filling country')
        document.execCommand('insertText', false, 'United States')
        countryAction = 2
      }
      else {
        countryAction = 1
      }
    });

  });