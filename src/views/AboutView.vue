<template>
  <section class="md:mx-[5.4rem] mt-10 md:mt-20">
    <div class="md:mx-[10rem]">
      <h1 class="text-lg leading-9 ">Team</h1>
      <p class="mt-4 text-[14px] font-['Soleil'] md:text-lg leading-5 md:leading-7 text-[#828282]">Just we exploring the
        universe of spectrum
        utilization
        to improve
        efficiency in mobile
        usage. we are researchers
        with keen interest in Data Engineering, Science and Analysis. We want to share our world with you!</p>
      <!-- </div> -->

      <div class="mt-10 flex flex-col md:flex-row md:gap-20 md:items-start">
        <div>
          <img class="md:h-[10.3rem] rounded-lg h-[341px] w-full md:w-[10.3rem]" src="@/assets/images/eze.jpeg" alt="">
          <p class="mt-5 font-['Soleil'] text-lg leading-5">Eze Ethelbert</p>
          <p class="text-[#BDBDBD] font-['Soleil'] ">Data Engineer</p>
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/eze-ethelbert-67418445/">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" y="0.5" width="27" height="27" fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_418_646" transform="scale(0.0208333)" />
                  </pattern>
                  <image id="image0_418_646" width="48" height="48"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsSAAALEgHS3X78AAAFVElEQVRo3u1a3U8cVRSfZX1QX6qNETUx0ehL/QP86JMPPGoaNfFPMFErVVtmwKq10TZUqdEETXyxTY36YsvXzBI+2mWxi4aPpko/kYWKUBBY6CJb2M/jOefO3Z1ZF3YW0RkSbnL2zsfdO7/fOeeec+/cURQqmuHnWjXuVjS9Gs/DKMsooKh6FussH/+fohr556pGHKUfj2uw3iGw6gJzDrym78abEeX9ECgHu8ACHlwWgYEwHQrR+SRKlZ2EiuA1Pam82w1ca0Y6z94LFkAMKmJSjaTyTicotQG6X2VaQCe3iQjwRtLC2gvaF1hYibp0J0FC1afxeCe5UDW7jepJ8IWulCfxXpDqeiLQZ/p82sPg7STk2FT1GPm/u9Fmo4Oa8eJYEBcdRBtVBx/WfhxAd9QFoKI2f92lAS5I5MGvQwJBMuCaNlCqm0F5owmUN1v4ns8tElLybNZwHwn+7Va451AHvHL6VzjcPQLPnxxAQgj8QJu7JEq5jQS/q6EHxhfiYC0/DE+Dvy6QB+8GCUeNUNOhsSiDXk1lIJXJQDKd4XM1cBWUfc04NgzvWcBnav/R+nMMOpvN5iSdyTKBXiRGbuTeGFiPgCYIPIIESOMSPJWUSSAYmfcugZwgwM6ROQacSAn3kQT2tV72rgtZBzG50aWZJdsgPjn4R3mD19KO+iUhN/Vp/yKnOHkok9jfCncdbIeXv73AWn/2q5/wWpsIpU4ebkmE/B9UivJWi6jxnK5vKBw70hjVJEhCef0MKK+eFsmMfN/6QFXkhWLCAYGAYyK8ExXx+MdBeOJ4CB47FmTFcIJEhbCyyiFRqoHPHAMNvREYmrzFUafvxgL04OD95WYMXvpmSGRlfPguBPTjeJRDLgm1CWPb1iszDJqA1gdH4frcci4MJ7AewfPPz4/Dgx91c1/+ckg4IoBmJmDFyn79irAGtnnmi3DRNvPLCXi6MQwXkbC1yIgmyyy22/1luDwSjgig67Rfm80lMsoBK8k0n+9tuYQEmrnNk43nGRRFKCFCyzNLq7ksvpJKs9apDxmWM3icMC2yeDsJDx89yxb1OSHhlEDH9Vlb/JcuUC0JoAWeQgJSs1K7Vi3L/8oik6FsQyGaygmKbmiFilpj8yywEQISWMYC/OffF6H58gxMLN4W9yxEZftbK0kxHuRE0U0LSIB/rabguRMDuahEg/q7i1P/sIQk+8KpwXyCXM+N/msLSHA0DafwS27BoDAH3He4E6LxRI4otZf9ajRJ3NvEiyfXLCC1v4AD86EjwiWkX/vN5Bi49mfRfo/1jHJu4MTnNoGbSytw/4ddNp9mzWL4PTU0mevPaoFPe8dMAob7BCiMVloJoE8zAXQRmk9Z+5P1cS8RmC4kIC2wTWCbwDaBbQJlz0YTZcxGJZip2Bp5AAl8PTBhm+WupkS/DaHIJhJA7faObXw9QPOgB9Yg8L05HyosjX03NjET44M/QY30TyzC2d/m+FVKF9YXpmLwYsGKjFZidD84Og/nUGghdGZ4Gu79oNNGgDWLk7Xa9qu80us2+6V6EM9faxp2NqUuuSa2rotrikjhmrimRLtidan2685GS73cdfjGwdHyr7CNk35Lrwdyr9W3EoG80gv2BrbCDg3YvAYP4h7f3CuufVnjT/+W2eQjjRfu4KOfHRA74Hp+m1X1IAm1yDarZnxGFtjB2/e0eax5dq/Yiiel1HWQwqMolXK3voq378UOeNJDgzpr83nSPIEXOPcotg8m6NsDzZg2TQMetACY2KKIdY/5oUqFSUJ+sWLsRKlHC8R4E1lz+WsV++Z7nH1eMypNxVcgbuVvWGcc+iQngagAAAAASUVORK5CYII=" />
                </defs>
              </svg>
            </a>
          </p>
        </div>
        <div class="mt-5 md:mt-0">
          <img class="md:h-[10.3rem] h-[341px] w-full md:w-[10.3rem]" src="@/assets/images/unsplash_WNoLnJo7tS8.png"
            alt="">
          <p class="mt-5 font-['Soleil'] text-lg leading-5">Okonkwo Emmanuel</p>
          <p class="text-[#BDBDBD] font-['Soleil'] ">Frontend Developer</p>
          <p>
            <a target="_blank" href="https://linkedin.com/in/emmanuelokonkwo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" y="0.5" width="27" height="27" fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_418_646" transform="scale(0.0208333)" />
                  </pattern>
                  <image id="image0_418_646" width="48" height="48"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsSAAALEgHS3X78AAAFVElEQVRo3u1a3U8cVRSfZX1QX6qNETUx0ehL/QP86JMPPGoaNfFPMFErVVtmwKq10TZUqdEETXyxTY36YsvXzBI+2mWxi4aPpko/kYWKUBBY6CJb2M/jOefO3Z1ZF3YW0RkSbnL2zsfdO7/fOeeec+/cURQqmuHnWjXuVjS9Gs/DKMsooKh6FussH/+fohr556pGHKUfj2uw3iGw6gJzDrym78abEeX9ECgHu8ACHlwWgYEwHQrR+SRKlZ2EiuA1Pam82w1ca0Y6z94LFkAMKmJSjaTyTicotQG6X2VaQCe3iQjwRtLC2gvaF1hYibp0J0FC1afxeCe5UDW7jepJ8IWulCfxXpDqeiLQZ/p82sPg7STk2FT1GPm/u9Fmo4Oa8eJYEBcdRBtVBx/WfhxAd9QFoKI2f92lAS5I5MGvQwJBMuCaNlCqm0F5owmUN1v4ns8tElLybNZwHwn+7Va451AHvHL6VzjcPQLPnxxAQgj8QJu7JEq5jQS/q6EHxhfiYC0/DE+Dvy6QB+8GCUeNUNOhsSiDXk1lIJXJQDKd4XM1cBWUfc04NgzvWcBnav/R+nMMOpvN5iSdyTKBXiRGbuTeGFiPgCYIPIIESOMSPJWUSSAYmfcugZwgwM6ROQacSAn3kQT2tV72rgtZBzG50aWZJdsgPjn4R3mD19KO+iUhN/Vp/yKnOHkok9jfCncdbIeXv73AWn/2q5/wWpsIpU4ebkmE/B9UivJWi6jxnK5vKBw70hjVJEhCef0MKK+eFsmMfN/6QFXkhWLCAYGAYyK8ExXx+MdBeOJ4CB47FmTFcIJEhbCyyiFRqoHPHAMNvREYmrzFUafvxgL04OD95WYMXvpmSGRlfPguBPTjeJRDLgm1CWPb1iszDJqA1gdH4frcci4MJ7AewfPPz4/Dgx91c1/+ckg4IoBmJmDFyn79irAGtnnmi3DRNvPLCXi6MQwXkbC1yIgmyyy22/1luDwSjgig67Rfm80lMsoBK8k0n+9tuYQEmrnNk43nGRRFKCFCyzNLq7ksvpJKs9apDxmWM3icMC2yeDsJDx89yxb1OSHhlEDH9Vlb/JcuUC0JoAWeQgJSs1K7Vi3L/8oik6FsQyGaygmKbmiFilpj8yywEQISWMYC/OffF6H58gxMLN4W9yxEZftbK0kxHuRE0U0LSIB/rabguRMDuahEg/q7i1P/sIQk+8KpwXyCXM+N/msLSHA0DafwS27BoDAH3He4E6LxRI4otZf9ajRJ3NvEiyfXLCC1v4AD86EjwiWkX/vN5Bi49mfRfo/1jHJu4MTnNoGbSytw/4ddNp9mzWL4PTU0mevPaoFPe8dMAob7BCiMVloJoE8zAXQRmk9Z+5P1cS8RmC4kIC2wTWCbwDaBbQJlz0YTZcxGJZip2Bp5AAl8PTBhm+WupkS/DaHIJhJA7faObXw9QPOgB9Yg8L05HyosjX03NjET44M/QY30TyzC2d/m+FVKF9YXpmLwYsGKjFZidD84Og/nUGghdGZ4Gu79oNNGgDWLk7Xa9qu80us2+6V6EM9faxp2NqUuuSa2rotrikjhmrimRLtidan2685GS73cdfjGwdHyr7CNk35Lrwdyr9W3EoG80gv2BrbCDg3YvAYP4h7f3CuufVnjT/+W2eQjjRfu4KOfHRA74Hp+m1X1IAm1yDarZnxGFtjB2/e0eax5dq/Yiiel1HWQwqMolXK3voq378UOeNJDgzpr83nSPIEXOPcotg8m6NsDzZg2TQMetACY2KKIdY/5oUqFSUJ+sWLsRKlHC8R4E1lz+WsV++Z7nH1eMypNxVcgbuVvWGcc+iQngagAAAAASUVORK5CYII=" />
                </defs>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
