function Util()
{
  this.buildIcon = function(type, label, altClass)
  {
    if (label == undefined) { label = type; }
    let labelElem = label != null ? `title="${label}" ` : ``;
    let iconClass = altClass == undefined ? 'article-icon' : altClass;
    return `<i ${labelElem}class="${main.util.getIcon(type)} textIcon ${iconClass}"></i>`;
  }

  this.isDefined = function(value)
  {
    return (typeof value !== 'undefined');
  }

  this.isObject = function(value)
  {
    return (typeof value == 'object');
  }

  this.isImage = function(filename)
  {
    return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(filename);
  }

  this.isType = function(typeArray, value)
  {
    if (this.isDefined(typeArray))
    {
      for (var i = 0; i < typeArray.length; i++)
      {
        if (typeArray[i] == value)
        {
          return true;
        }
      }
    }
    return false;
  }

  String.prototype.to_properCase = function()
  {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  // Source: https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
  this.extractRootDomain = function(url)
  {
    var domain = this.extractHostname(url),
    splitArr = domain.split('.'),
    arrLen = splitArr.length;

    // extracting the root domain here
    // if there is a subdomain
    if (arrLen > 2)
    {
      domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
      // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
      if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2)
      {
        // this is using a ccTLD
        domain = splitArr[arrLen - 3] + '.' + domain;
      }
    }
    return domain;
  }

  // Source: https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
  this.extractHostname = function(url)
  {
    var hostname;
    // find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1)
    {
      hostname = url.split('/')[2];
    }
    else
    {
      hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }
}
