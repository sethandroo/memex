function Nav()
{
  this.container = null;

  this.install = function(container)
  {
    this.container = container;
  }

  this.display = function(value)
  {
    let navContent = ``;
    if (window.showAdd !== undefined && window.showAdd)
    {
      // ADD
      navContent += `<div class="nav-itemgroup">`;
      navContent += `<a href='#add' class="nav-item">`;
      navContent += `<b>a</b>dd`;
      navContent += `</a>`;
      navContent += `</div>`;
    }

    // TAGS
    navContent += `<div class="nav-itemgroup">`;
    navContent += `<div class="nav-tagcontainer">`;


    navContent += `<a class="nav-tag" href='#'>`;
    navContent += `<div class="nav-tagcount">${value.total}</div>`;
    navContent += `<div class="nav-taglabel">all</div>`;
    navContent += `</a>`;


    if (value.tags.length > 0)
    {
      for (var t = 0; t < Math.min(value.tags.length, SETTINGS.STATSNUMTAGS); t++)
      {
        navContent += `<a class="nav-tag" href='#tag-${value.tags[t][0]}'>`;
        navContent += `<div class="nav-tagcount">${value.tags[t][1]}</div>`;
        navContent += `<div class="nav-taglabel">${value.tags[t][0]}</div>`;
        navContent += `</a>`;
      }
      navContent += `</div>`;
    }
    navContent += `</div>`;
    this.container.innerHTML = navContent;
  }
}
