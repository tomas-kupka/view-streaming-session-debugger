


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery.tableScroll/jquery.tablescroll.js at master · farinspace/jquery.tableScroll</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe17.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4189693" name="octolytics-actor-id" /><meta content="tomas-kupka" name="octolytics-actor-login" /><meta content="d77e19d60e98766ecdcc8b80b077b174db2d605c61070901036cf743900e8185" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="3s/0mNWS6zwd5bgLP//iRpUvv2PgghWHhdLAA3rWvlI=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-aa31dccb9df8242dbd5abaea7591ae7f16cc4101.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-ec4f51bae74d4ad5725891dccaecd4cc727d8cdc.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-5aedc81091ebed048bfaed27f559182c9802355b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="5ec9e4827e4e5ec3a8cfb080a5633b59">

        <link data-pjax-transient rel='permalink' href='/farinspace/jquery.tableScroll/blob/af4eca878a3656045dca47d323a9111faf4cafa2/jquery.tablescroll.js'>
  <meta property="og:title" content="jquery.tableScroll"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/farinspace/jquery.tableScroll"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jquery.tableScroll - This jQuery plugin converts a properly formatted table, having thead and tbody elements (tfoot optional), into a scrollable table."/>

  <meta name="description" content="jquery.tableScroll - This jQuery plugin converts a properly formatted table, having thead and tbody elements (tfoot optional), into a scrollable table." />

  <meta content="94205" name="octolytics-dimension-user_id" /><meta content="farinspace" name="octolytics-dimension-user_login" /><meta content="547282" name="octolytics-dimension-repository_id" /><meta content="farinspace/jquery.tableScroll" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="547282" name="octolytics-dimension-repository_network_root_id" /><meta content="farinspace/jquery.tableScroll" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/farinspace/jquery.tableScroll/commits/master.atom" rel="alternate" title="Recent Commits to jquery.tableScroll:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="tomas-kupka"
      data-repo="farinspace/jquery.tableScroll"
      data-branch="master"
      data-sha="60a835bfea3d244513c52479e30fbf597a085583"
  >

    <input type="hidden" name="nwo" value="farinspace/jquery.tableScroll" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/tomas-kupka" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/26c7cfc54b40a97c0307fd9ce75441e2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> tomas-kupka
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings "
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="farinspace/jquery.tableScroll">This repository</span>
    </li>
    <li>
      <a href="/farinspace/jquery.tableScroll/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="3s/0mNWS6zwd5bgLP//iRpUvv2PgghWHhdLAA3rWvlI=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="547282" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/farinspace/jquery.tableScroll/watchers">
          7
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/farinspace/jquery.tableScroll/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/farinspace/jquery.tableScroll/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/farinspace/jquery.tableScroll/stargazers">83</a>
</div>

  </li>


        <li>
          <a href="/farinspace/jquery.tableScroll/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/farinspace/jquery.tableScroll/network" class="social-count">48</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/farinspace" class="url fn" itemprop="url" rel="author"><span itemprop="title">farinspace</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/farinspace/jquery.tableScroll" class="js-current-repository js-repo-home-link">jquery.tableScroll</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/farinspace/jquery.tableScroll" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /farinspace/jquery.tableScroll">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/farinspace/jquery.tableScroll/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /farinspace/jquery.tableScroll/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>9</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/farinspace/jquery.tableScroll/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /farinspace/jquery.tableScroll/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>4</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/farinspace/jquery.tableScroll/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /farinspace/jquery.tableScroll/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/farinspace/jquery.tableScroll/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /farinspace/jquery.tableScroll/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/farinspace/jquery.tableScroll/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /farinspace/jquery.tableScroll/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/farinspace/jquery.tableScroll/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /farinspace/jquery.tableScroll/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/farinspace/jquery.tableScroll.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/farinspace/jquery.tableScroll.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:farinspace/jquery.tableScroll.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:farinspace/jquery.tableScroll.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/farinspace/jquery.tableScroll" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/farinspace/jquery.tableScroll" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>

  <a href="github-mac://openRepo/https://github.com/farinspace/jquery.tableScroll" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/farinspace/jquery.tableScroll/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ff5288baf41655e463dd2e1f9c981e38 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ff5288baf41655e463dd2e1f9c981e38 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/farinspace/jquery.tableScroll/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/farinspace/jquery.tableScroll/blob/master/jquery.tablescroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/farinspace/jquery.tableScroll/blob/v20110426/jquery.tablescroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v20110426" data-skip-pjax="true" rel="nofollow" title="v20110426">v20110426</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/farinspace/jquery.tableScroll/blob/v20100514/jquery.tablescroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v20100514" data-skip-pjax="true" rel="nofollow" title="v20100514">v20100514</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/farinspace/jquery.tableScroll/blob/v20100505/jquery.tablescroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v20100505" data-skip-pjax="true" rel="nofollow" title="v20100505">v20100505</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/farinspace/jquery.tableScroll/blob/v20100304/jquery.tablescroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v20100304" data-skip-pjax="true" rel="nofollow" title="v20100304">v20100304</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/farinspace/jquery.tableScroll" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.tableScroll</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.tablescroll.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.tablescroll.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/e19aad1bd12334587247f7575e6480c1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/brushbox" rel="author">brushbox</a></span>
    <time class="js-relative-date" datetime="2011-12-13T20:11:44-08:00" title="2011-12-13 20:11:44">December 13, 2011</time>
    <div class="commit-title">
        <a href="/farinspace/jquery.tableScroll/commit/3d7834fc8791c65a65384c8e7a5ea85ce14ee7b1" class="message" data-pjax="true">minor change that allows jquery.tableScroll(...) to be re-applied</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="brushbox" href="/farinspace/jquery.tableScroll/commits/master/jquery.tablescroll.js?author=brushbox"><img height="20" src="https://secure.gravatar.com/avatar/e19aad1bd12334587247f7575e6480c1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jgelo" href="/farinspace/jquery.tableScroll/commits/master/jquery.tablescroll.js?author=jgelo"><img height="20" src="https://secure.gravatar.com/avatar/dcd0f32867ec1147bf3ae113c0dfa66a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dbegunoff" href="/farinspace/jquery.tableScroll/commits/master/jquery.tablescroll.js?author=dbegunoff"><img height="20" src="https://secure.gravatar.com/avatar/b629ed1cba20572343371a447a886b4a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="daemonic13" href="/farinspace/jquery.tableScroll/commits/master/jquery.tablescroll.js?author=daemonic13"><img height="20" src="https://secure.gravatar.com/avatar/ce8310b2a84b5730bf306737a9c0579e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="collymitch" href="/farinspace/jquery.tableScroll/commits/master/jquery.tablescroll.js?author=collymitch"><img height="20" src="https://secure.gravatar.com/avatar/16ae42b2a129b1a122dab27d214184fc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/e19aad1bd12334587247f7575e6480c1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/brushbox">brushbox</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/dcd0f32867ec1147bf3ae113c0dfa66a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jgelo">jgelo</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/b629ed1cba20572343371a447a886b4a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dbegunoff">dbegunoff</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/ce8310b2a84b5730bf306737a9c0579e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/daemonic13">daemonic13</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/16ae42b2a129b1a122dab27d214184fc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/collymitch">collymitch</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>189 lines (151 sloc)</span>
        <span>5.61 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/farinspace/jquery.tableScroll/edit/master/jquery.tablescroll.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/farinspace/jquery.tableScroll/raw/master/jquery.tablescroll.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/farinspace/jquery.tableScroll/blame/master/jquery.tablescroll.js" class="button minibutton ">Blame</a>
          <a href="/farinspace/jquery.tableScroll/commits/master/jquery.tablescroll.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/farinspace/jquery.tableScroll/delete/master/jquery.tablescroll.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">Copyright (c) 2009 Dimas Begunoff, http://www.farinspace.com</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">Licensed under the MIT license</span></div><div class='line' id='LC6'><span class="cm">http://en.wikipedia.org/wiki/MIT_License</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">Permission is hereby granted, free of charge, to any person</span></div><div class='line' id='LC9'><span class="cm">obtaining a copy of this software and associated documentation</span></div><div class='line' id='LC10'><span class="cm">files (the &quot;Software&quot;), to deal in the Software without</span></div><div class='line' id='LC11'><span class="cm">restriction, including without limitation the rights to use,</span></div><div class='line' id='LC12'><span class="cm">copy, modify, merge, publish, distribute, sublicense, and/or sell</span></div><div class='line' id='LC13'><span class="cm">copies of the Software, and to permit persons to whom the</span></div><div class='line' id='LC14'><span class="cm">Software is furnished to do so, subject to the following</span></div><div class='line' id='LC15'><span class="cm">conditions:</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="cm">The above copyright notice and this permission notice shall be</span></div><div class='line' id='LC18'><span class="cm">included in all copies or substantial portions of the Software.</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="cm">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,</span></div><div class='line' id='LC21'><span class="cm">EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES</span></div><div class='line' id='LC22'><span class="cm">OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND</span></div><div class='line' id='LC23'><span class="cm">NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT</span></div><div class='line' id='LC24'><span class="cm">HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,</span></div><div class='line' id='LC25'><span class="cm">WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING</span></div><div class='line' id='LC26'><span class="cm">FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR</span></div><div class='line' id='LC27'><span class="cm">OTHER DEALINGS IN THE SOFTWARE.</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="cm">*/</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>	<span class="kd">var</span> <span class="nx">scrollbarWidth</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="c1">// http://jdsharp.us/jQuery/minute/calculate-scrollbar-width.php</span></div><div class='line' id='LC36'>	<span class="kd">function</span> <span class="nx">getScrollbarWidth</span><span class="p">()</span> </div><div class='line' id='LC37'>	<span class="p">{</span></div><div class='line' id='LC38'>		<span class="k">if</span> <span class="p">(</span><span class="nx">scrollbarWidth</span><span class="p">)</span> <span class="k">return</span> <span class="nx">scrollbarWidth</span><span class="p">;</span></div><div class='line' id='LC39'>		<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div style=&quot;width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;&quot;&gt;&lt;div style=&quot;height:100px;&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span> </div><div class='line' id='LC40'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span> </div><div class='line' id='LC41'>		<span class="kd">var</span> <span class="nx">w1</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">,</span> <span class="nx">div</span><span class="p">).</span><span class="nx">innerWidth</span><span class="p">();</span> </div><div class='line' id='LC42'>		<span class="nx">div</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;overflow-y&#39;</span><span class="p">,</span> <span class="s1">&#39;auto&#39;</span><span class="p">);</span> </div><div class='line' id='LC43'>		<span class="kd">var</span> <span class="nx">w2</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">,</span> <span class="nx">div</span><span class="p">).</span><span class="nx">innerWidth</span><span class="p">();</span> </div><div class='line' id='LC44'>		<span class="nx">$</span><span class="p">(</span><span class="nx">div</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span> </div><div class='line' id='LC45'>		<span class="nx">scrollbarWidth</span> <span class="o">=</span> <span class="p">(</span><span class="nx">w1</span> <span class="o">-</span> <span class="nx">w2</span><span class="p">);</span></div><div class='line' id='LC46'>		<span class="k">return</span> <span class="nx">scrollbarWidth</span><span class="p">;</span></div><div class='line' id='LC47'>	<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tableScroll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC50'>	<span class="p">{</span></div><div class='line' id='LC51'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">==</span> <span class="s1">&#39;undo&#39;</span><span class="p">)</span></div><div class='line' id='LC52'>		<span class="p">{</span></div><div class='line' id='LC53'>			<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC54'>			<span class="k">if</span> <span class="p">(</span><span class="nx">container</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;tablescroll_wrapper&#39;</span><span class="p">))</span> </div><div class='line' id='LC55'>			<span class="p">{</span></div><div class='line' id='LC56'>				<span class="nx">container</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.tablescroll_head thead&#39;</span><span class="p">).</span><span class="nx">prependTo</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC57'>				<span class="nx">container</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.tablescroll_foot tfoot&#39;</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC58'>				<span class="nx">container</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC59'>				<span class="nx">container</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC60'>			<span class="p">}</span></div><div class='line' id='LC61'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC62'>		<span class="p">}</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>		<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tableScroll</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>		<span class="c1">// Bail out if there&#39;s no vertical overflow</span></div><div class='line' id='LC67'>		<span class="c1">//if ($(this).height() &lt;= settings.height)</span></div><div class='line' id='LC68'>		<span class="c1">//{</span></div><div class='line' id='LC69'>		<span class="c1">//  return this;</span></div><div class='line' id='LC70'>		<span class="c1">//}</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">scrollbarWidth</span> <span class="o">=</span> <span class="nx">getScrollbarWidth</span><span class="p">();</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>		<span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC75'>		<span class="p">{</span></div><div class='line' id='LC76'>			<span class="kd">var</span> <span class="nx">flush</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">flush</span><span class="p">;</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>			<span class="kd">var</span> <span class="nx">tb</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;tablescroll_body&#39;</span><span class="p">);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// find or create the wrapper div (allows tableScroll to be re-applied)</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">wrapper</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tb</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;tablescroll_wrapper&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">tb</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;tablescroll_wrapper&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">tb</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">tb</span><span class="p">);</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>			<span class="c1">// check for a predefined container</span></div><div class='line' id='LC90'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">containerClass</span><span class="p">))</span></div><div class='line' id='LC91'>			<span class="p">{</span></div><div class='line' id='LC92'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div&gt;&lt;/div&gt;&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">containerClass</span><span class="p">).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">);</span></div><div class='line' id='LC93'>			<span class="p">}</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>			<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">width</span> <span class="o">?</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">width</span> <span class="o">:</span> <span class="nx">tb</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">();</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>			<span class="nx">wrapper</span><span class="p">.</span><span class="nx">css</span></div><div class='line' id='LC98'>			<span class="p">({</span></div><div class='line' id='LC99'>				<span class="s1">&#39;width&#39;</span><span class="o">:</span> <span class="nx">width</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC100'>				<span class="s1">&#39;height&#39;</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">height</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC101'>				<span class="s1">&#39;overflow&#39;</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span></div><div class='line' id='LC102'>			<span class="p">});</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>			<span class="nx">tb</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">width</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>			<span class="c1">// with border difference</span></div><div class='line' id='LC107'>			<span class="kd">var</span> <span class="nx">wrapper_width</span> <span class="o">=</span> <span class="nx">wrapper</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">();</span></div><div class='line' id='LC108'>			<span class="kd">var</span> <span class="nx">diff</span> <span class="o">=</span> <span class="nx">wrapper_width</span><span class="o">-</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>			<span class="c1">// assume table will scroll</span></div><div class='line' id='LC111'>			<span class="nx">wrapper</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">width</span><span class="o">:</span><span class="p">((</span><span class="nx">width</span><span class="o">-</span><span class="nx">diff</span><span class="p">)</span><span class="o">+</span><span class="nx">settings</span><span class="p">.</span><span class="nx">scrollbarWidth</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC112'>			<span class="nx">tb</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,(</span><span class="nx">width</span><span class="o">-</span><span class="nx">diff</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>			<span class="k">if</span> <span class="p">(</span><span class="nx">tb</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">()</span> <span class="o">&lt;=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span></div><div class='line' id='LC115'>			<span class="p">{</span></div><div class='line' id='LC116'>				<span class="nx">wrapper</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">height</span><span class="o">:</span><span class="s1">&#39;auto&#39;</span><span class="p">,</span><span class="nx">width</span><span class="o">:</span><span class="p">(</span><span class="nx">width</span><span class="o">-</span><span class="nx">diff</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">});</span></div><div class='line' id='LC117'>				<span class="nx">flush</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC118'>			<span class="p">}</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>			<span class="c1">// using wrap does not put wrapper in the DOM right </span></div><div class='line' id='LC121'>			<span class="c1">// away making it unavailable for use during runtime</span></div><div class='line' id='LC122'>			<span class="c1">// tb.wrap(wrapper);</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>			<span class="c1">// possible speed enhancements</span></div><div class='line' id='LC125'>			<span class="kd">var</span> <span class="nx">has_thead</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;thead&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">).</span><span class="nx">length</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span> <span class="p">;</span></div><div class='line' id='LC126'>			<span class="kd">var</span> <span class="nx">has_tfoot</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tfoot&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">).</span><span class="nx">length</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span> <span class="p">;</span></div><div class='line' id='LC127'>			<span class="kd">var</span> <span class="nx">thead_tr_first</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;thead tr:first&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">);</span></div><div class='line' id='LC128'>			<span class="kd">var</span> <span class="nx">tbody_tr_first</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tbody tr:first&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">);</span></div><div class='line' id='LC129'>			<span class="kd">var</span> <span class="nx">tfoot_tr_first</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tfoot tr:first&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">);</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>			<span class="c1">// remember width of last cell</span></div><div class='line' id='LC132'>			<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;th, td&#39;</span><span class="p">,</span><span class="nx">thead_tr_first</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC135'>			<span class="p">{</span></div><div class='line' id='LC136'>				<span class="nx">w</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">width</span><span class="p">();</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;th:eq(&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;), td:eq(&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;)&#39;</span><span class="p">,</span><span class="nx">thead_tr_first</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">w</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC139'>				<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;th:eq(&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;), td:eq(&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;)&#39;</span><span class="p">,</span><span class="nx">tbody_tr_first</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">w</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC140'>				<span class="k">if</span> <span class="p">(</span><span class="nx">has_tfoot</span><span class="p">)</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;th:eq(&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;), td:eq(&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;)&#39;</span><span class="p">,</span><span class="nx">tfoot_tr_first</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">w</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC141'>			<span class="p">});</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>			<span class="k">if</span> <span class="p">(</span><span class="nx">has_thead</span><span class="p">)</span> </div><div class='line' id='LC144'>			<span class="p">{</span></div><div class='line' id='LC145'>				<span class="kd">var</span> <span class="nx">tbh</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;table class=&quot;tablescroll_head&quot; cellspacing=&quot;0&quot;&gt;&lt;/table&gt;&#39;</span><span class="p">).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;thead&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">));</span></div><div class='line' id='LC146'>			<span class="p">}</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>			<span class="k">if</span> <span class="p">(</span><span class="nx">has_tfoot</span><span class="p">)</span> </div><div class='line' id='LC149'>			<span class="p">{</span></div><div class='line' id='LC150'>				<span class="kd">var</span> <span class="nx">tbf</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;table class=&quot;tablescroll_foot&quot; cellspacing=&quot;0&quot;&gt;&lt;/table&gt;&#39;</span><span class="p">).</span><span class="nx">insertAfter</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tfoot&#39;</span><span class="p">,</span><span class="nx">tb</span><span class="p">));</span></div><div class='line' id='LC151'>			<span class="p">}</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>			<span class="k">if</span> <span class="p">(</span><span class="nx">tbh</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span></div><div class='line' id='LC154'>			<span class="p">{</span></div><div class='line' id='LC155'>				<span class="nx">tbh</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">width</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>				<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span><span class="p">)</span></div><div class='line' id='LC158'>				<span class="p">{</span></div><div class='line' id='LC159'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tr:first th:last, tr:first td:last&#39;</span><span class="p">,</span><span class="nx">tbh</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,(</span><span class="nx">w</span><span class="o">+</span><span class="nx">settings</span><span class="p">.</span><span class="nx">scrollbarWidth</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC160'>					<span class="nx">tbh</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC161'>				<span class="p">}</span></div><div class='line' id='LC162'>			<span class="p">}</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>			<span class="k">if</span> <span class="p">(</span><span class="nx">tbf</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span></div><div class='line' id='LC165'>			<span class="p">{</span></div><div class='line' id='LC166'>				<span class="nx">tbf</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">width</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>				<span class="k">if</span> <span class="p">(</span><span class="nx">flush</span><span class="p">)</span></div><div class='line' id='LC169'>				<span class="p">{</span></div><div class='line' id='LC170'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tr:first th:last, tr:first td:last&#39;</span><span class="p">,</span><span class="nx">tbf</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,(</span><span class="nx">w</span><span class="o">+</span><span class="nx">settings</span><span class="p">.</span><span class="nx">scrollbarWidth</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC171'>					<span class="nx">tbf</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC172'>				<span class="p">}</span></div><div class='line' id='LC173'>			<span class="p">}</span></div><div class='line' id='LC174'>		<span class="p">});</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC177'>	<span class="p">};</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>	<span class="c1">// public</span></div><div class='line' id='LC180'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tableScroll</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span></div><div class='line' id='LC181'>	<span class="p">{</span></div><div class='line' id='LC182'>		<span class="nx">flush</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// makes the last thead and tbody column flush with the scrollbar</span></div><div class='line' id='LC183'>		<span class="nx">width</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> <span class="c1">// width of the table (head, body and foot), null defaults to the tables natural width</span></div><div class='line' id='LC184'>		<span class="nx">height</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span> <span class="c1">// height of the scrollable area</span></div><div class='line' id='LC185'>		<span class="nx">containerClass</span><span class="o">:</span> <span class="s1">&#39;tablescroll&#39;</span> <span class="c1">// the plugin wraps the table in a div with this css class</span></div><div class='line' id='LC186'>	<span class="p">};</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06301s from fe17.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/farinspace/jquery.tableScroll/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

