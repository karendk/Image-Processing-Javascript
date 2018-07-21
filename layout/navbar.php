  <div class="navbar navbar-inverse navbar-fixed-top" >
    <div class="container">
      <div class="navbar-header">
       <button id="tutup" class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
       </button>
          <div class="navbar-brand" href="" style="color:white; font-size: 12pt; text-align: justify;">
          Citra Editor
          </div>
      </div>
       <div class="collapse navbar-collapse navHeaderCollapse">
          <ul class="nav navbar-nav navbar-right" style="margin-bottom: 0; margin-top: 0;">
            <li>
              <input id="profile-image-upload" class="hidden" accept="image/*" type="file">
              <a id="profile-image" href='#' style="color:white;">Open</a>
            </li>
            <li><a id="menu" type="button" onclick="saveImage()" >Save</a></li>
            <li>
          <!-- Large modal -->
          <a role="button" id="menu" data-toggle="modal" data-target="#myModal">About</a>
            </li>            
          </ul>
        </div>    
       </div>
  </div>

  <!-- Modal -->
                <div class="modal fade" style="position: absolute;" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">About Application</h4>
                      </div>
                      <div class="modal-body" style="text-align: justify;">
                      <b>Citra Editor (Leaked)</b>
                      <br>
                      This application is for image processing with a simplest alogarithm. Become the one to improve our apps. Enjoy the feature, and wait for the new effects.
                      <br><br>
                      <table>
                        <th>Developer Team</th>
                        <tr>
                          <td>Tri</td>
                          <td>14650003</td>
                        </tr>
                        <tr>
                          <td>Yeni</td>
                          <td>14650011</td>
                        </tr>
                        <tr>
                          <td>Karen</td>
                          <td>14650033</td>
                        </tr>
                      </table>
                        
                      </div>
                      <div class="modal-footer" align="center">
                        Copyright by KTY
                      </div>
                    </div>
                  </div>
                </div>