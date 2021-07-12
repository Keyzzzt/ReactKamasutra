import  './styles/App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD7+/seHh75+fmwsLD19fXl5eXr6+vy8vLJycnp6enPz8/29vba2tri4uKBgYEwMDA9PT2Tk5PU1NSkpKQ3NzednZ1OTk62trbDw8NgYGBvb28LCwskJCRbW1sXFxdCQkKMjIx4eHhra2tJSUkbGxsrKyuqqqoQEBCOjo5cXFx3FfLHAAARjUlEQVR4nO1daXeyOhC+4gaIgCLKoiKC1bb///9dJSGZhBBAWfqew/PNVkMmmX0m4b//RowYMWLEiBEjRowYMWLEiBEjRoz4lzHTNFVd6XPnsP2aSmA7B99UVU1bKENPuT7MwPcPSXTbT0+Terhstl56ffiBoQ49eTnUYP5z/PU2l5qEFXA6b6MwOfjGn9tPzTR0N4nfpqyAe2gH+s4ami4M83EN3982Cc6x7fjaoLSpVnD1OiCNwTR1zeUgdGq+4527Jg/htE8fQa/EKZp+9e79UEeo3IYPa9EPfaaf7PuljlDpOcGqa/I099iEvKehe6p/++A+fN8PdIKnxfT9h2vbaRRvp02IvNld8qtpJLWmsb954dE5zANTW8+qBp3NFpbhu06SRl5cS7A3892yE/p0Z1ODuPT69MKW6hsSM9NWlv5w7Br66/t2aJtblZUvZ87pJk6vc0tdt/AwbWW4SbS9f8seePJa9fCWV+n2eUdHN1v2KGfWzrdTqcKOH22ZSbP8QafzzQnMrsICRVENP9mW+0t7u1LMazxlV6pd9uEhWEqIU+oSrkjFdrab21EZldPrp86rmZTI/d2eW6VMomhm4DpGXaFcG07iuL6xKlsTRTPctHQfP5GP5UFM3e91J2IPZf2k7Bkaek+t5DlWAw5a7I7xa7a3Z+ikW5rwl5qf3ITLfZ6/TaO/FQ0YHXYCplKeRu2aRkhiT4ne2Fyo81/8gG2YPAwh8630q1Cle3pz4p7QfotDfcWOVeAkzdSdbAtyvjm8JxuKEYI9uh1dY1ncTE0/7gWpg+MbanVeVKDnJOC3RjVdO2Lcrq/D+w6HYkTMAzdHJyhSuZwLQra4sTN3LYyxdznJWpuH455bh4v9mW5b6DeOazbeT6ByfLMw7MI+fjmNHrQrrFLIRtuKGvx4RacjNT6i74X1Iy4Mu0kfBseGllOQyLDB4pr8r28sfQvdvgmE4TJvxcmwjsWhJ+fooLM7aR14ObrVJtHnZh8xPK4GtthHTVrz+PXiNr6wtw3G4VYdTtmfawqjwf5s40L1YjqcoJANfLTouwm38YXYYSyxZXOTMOuMHjCq8QJdBm0eljn83q49+p5QHmUPOnkPyCsGqzE2NSzjjvEbtuAXlhOXPPVpj1pPoehCdyPD+QpSxprD/G9fKYtLZk0Syvem2J1AcDvIEVlR+fPOUUBpZKU2rBIWyNinB6XvR1KDOPvt0/eEZpc/cjL5DYjiVpnw5yof9QG+OiUTX7uyCPj7Pa+wGmtpWugUEuO7gF88SddbAXHYOedoJShRnwj7dnUMM52iZ8UgIUIHg6C7bEggtZt8hdQf6VO23RH4JFHKqK/AKZc6uBaP8gFNqkcvufE0y3VatmC1LFBnJE5StfhFiT4Fu5Wvw/xL+oDp545oBYkVjEoM8Sykf3NLh6NbeMQZiIO8jHvqvmCilKUvcpwxF5nUTd2UDeaTr+B9XshFcDKZd07gcxJVJObL7NI/lS08ZYgf9IeqJP61l2r0Uq4JnruIGFWlzkpJrKhQJyITX0Wch6JIW8hW1kEgzX4/MUWeKjXmkTjNNydfOGafdxUFhE3nla4cD/lEnoYxW2uNkixWgJRCJF4Vivqrv7KsUhZMkbkgt4rmzsQKglC4QXxdMeqhNwKfIlYlisgZpbqmgkIvE8OlfEyvp5Izgl8hinv0LWLbalEYSIf87trUc6gy/NmXdGISa1E4Fw+F0Sx39zlWFZ0RGUcZLVK47b0BTb7gkyxYbJPCbmJeGTRJyD/BXEpTTLUo9MVDZQjbqGY3hC7tLMu+UlvTxJmLYIiHemHaVVQvhcwoblkKqijcZ966xFpEPblrLCRLjr2w2vZwmnkrSvl4PVuKHJJNRO4H9cLEFPrc/0uHC3ujiYVe7iijGRNltBdnHjQSfaAYWVAhRei3T5AChvEskKdN82iR2OFSyAB29tkRjzaJBmvGLnWzblmYQ2MLu2QAwsZe9rHMIPbpcrNYxyVT+kUGv3KKNAzLYndD3DT4NWA/fRlbIR+SqtIyOaJMkKVpVuJE8LEvcgQwxJk/nOamqrSsUquSb2SqaSHWzv07bBQLsa75ynZkSUpHpbm2/4jjinZdmDw495a7EMEVTQlTRLMuaenvyQr9omBEFHYmg/gzTy2T6QZTmL9Nsm9Q6sudSmLzUa5eEVhYaWWndq9eQyjLYK4j3hGyaUaRQnKf3+WllB35DqJDELBsZO0IQSfnIlbz9NfPSxEibbrN5rQiFUCvXJCWRHva2W4ILOxNwqRu686Osgqc/SQEfSYi9xvZdzpZWY2UbHSU7YZVLIxKzH0QtUIVhTk/Ph1JW4eLuirai2/eVshiO+p8Z6ysFNP65b822yzTKCv9J3pqla3LVcoEVQwUzqrEVnxJB+b2iu8dmpxKS3PL2GtLCjXTtTPuCQWdo8VSA8+kclaK86/9Zh+tQvtXmRhqqaRq1wQL/XDL7PIpLHRCvjAv2AvEVpRJ5X4z/Z7BfUYotaU2qeN9AG33yK3B5loynMmnFeNMDVEleZb7zbx7zmvTMjU1z1Ml70M1bC/XbBunVBo0PsGP/C+qQY7yLJlKlgJpUyVmRvsuUSb6NHcs3oO6c4ApT32J58BHUBu017R2WOU3E4t60dnPGUqSbGpcY+RSrHw7Ai0SSSDfBE6Z2tm3LfJ5W1VPoUEhUlEmYxI3Yn8ok9Z3xFDRdocjtHBbu3IYTpkifUE3opqViKf2nS0O25cUC8UDFYYaU6hYvh0zmtE71Iiu2Uz1LftbxkQI1alc2pyA2I7RNZHI5KHhL80avNe7R7RhFX9cr8WYVX4oyUaLb1516GOSL4fogVB3haLfY4tSfw+VnZ/yYcs9rdtbpTO7nm36muqZGn4Vzbjd0TNhHCzKlOZRZM1M/8L8STd84Pltm7UrIQyFqLGJxET5nOWgXIB0DWjiEFFIHMUa+RvNfIjOUd0eTZJbJvjlPlOcoMz/U2cEStEFPRgoLwGFpBVkX7ELWvDcvCJ5QudTBgtIL7L2oGmknqhQzYs8TVB+FewTMU/fkgap2c4/bkQJiOlRb1qoAxRus1AXtL7VjN9o6jhGwTJ1TovGBvBMWZuipTuhuD0uLnM+a1KIpBB4qnXjN2IScVLGJPWAouMNXfNYoO0tPy09BPreCTBKId4AuoVeXX43+Z8Qvi3I4SqGU77Mocu0XgZ2aXfxV/RuvEwdNJ+bbX3HUaUZKDQN4roVKDTYWOY7dM3FWlEW2tJ3wri8N/X4ftKKhD/YA6VcVJ4ILgDEy8jLzzex0OovaM/83sTxWdqWen/zgCICsYd4C2mQ3iQEj7lNXGJ/nK/LVTacCeA9PguV8+VPEReALWzCFtQEpkiZ403kRXnd+HqaX//T0lXueaOggkplsywKDaS/EC/gLla+erxqdkPN2W6hiQMn77HhokwUNyuo0E28wXHvXI9CVS8WC7uVG64QW56QA7qjE6g4K8NDo2oebeI628QLp+LrU3iKHu10Gc2QYKA00ppq/VvTgegm4jQoqnlzvK7WpTD8WPxyLLKlviOWBHFG46Z6hYaFiCoUQ3Bum1LaHQFxtnftFaVQpQEx1oJy2q15WZP2KeB+7qyvLOKmWnWkZZId+/yYLIDgNY0UTQOErm94SFZMfo17SV8ZmztncyRNPJg+t+X7gF4q74wU3hJs4TtD0YzPCdmI5Ys/OHUvN/nTdN52zXSW0CWnDHR6zwrR7bGp78Y7t7siXQRp89sxKvHqaT8jRgLGPnzPywXFSCzYYVEQuYPRdFW9n04Kwq9IAskcsBTTN/1cUKrzEF1P5bwvzNsXiOIl8Ttq2XgqlwQZ1jlNZ5U1eVUC9GLgipUtOkdiJWyUtD363dw29sJxckaD07L9ZPO+raX57i1SNtZd1KSvGE54O39NzudbeHS62r0M6jl3OsDxhA8Kl0sqY5gR5pObULwWq50RGLuV+Hqg9hDkaXeDysZH7a7FI33ppMtzv1VQjhd8Eg+kRz7qWAbxHw5+zd7PkkAsNziCAN7Mh/MJCiM9eLemT7g3pNRB85e4HNYANBGD7w1ZRwM2J4bYFAJPSnI0vR5AhRSnocz2b/moCx3zKFAP3uejgtGwVn4MdBjhPwUXUIGKn7ZxHQDN1uEsjTYUm1pIj0Jvv5We8xWValz4GKjDNH8u5NFWQhd4H0Mf5++rsAR+cFvyQo1iSS9GnwAhRXumGRjFyht8Ogfk0fYsM+g4aac9733sQAtAixpvRfn0MpSpQFgAHm2YApYDHBBqkTXeAOgp2LYbhAJ9+nZA3QJAP9SpZaW3BK20gxyRzaDuO1xokD//2Jt/FzPQlvhmdk0G0IY51BlSl3pXmw5WGVSjPo9Y3sIO9HR0EoaDwxc9XtxCAds+PulHlgB0JYg6ZzoGdI+74NEMIGpJe79UAZ7L60ybwyup+hZFKIQdHkSG7bn9iqIFW0C7FBFgMvZ9niWF19KdOzXH8AqVipMbrQIKYcfyAc/r9eegwlui7K4jVNhl3ZcowmXt4VoVEL+Q/qFul1UDWqaF42OVmAFRjHHhzuxE+LHKnMF+j16MlAZ4Bnd9zNo/AfzfIr/oHp4C6ulKjgCk8xxE4jpxW+ZUy8YiAG1wX1dRMquKM6jq1m7VDu9iPPAO+FGduaNFQMnAPqK13beXo1o4ucDB4yznHpO1ULvFWLvtLqdDSz6Amea2lmlI6jXhbgHeyW8wMF6vQmlBGtUDuaZ/DZmlc1PPAhp+rFCzo+3VBySrEHjUCkFnLey7aglP6ufXCb8mdL9+1Eiqh1+TyQ0vE7xlr1GbejuACjXPmlxfZG9+3k3VzvQEqkzY97gdINUOfZu8goCP1MblZ81l0NHJvSn2HlbwoNsgZT1wsob0fxPdlzQ8E6NYD5zLy18lwbxoY6DrxZagnS3vDtRIqBod6isdDbycB+/WDNqJwQoJJtAEuVlUaef3JXJ21WpnvQrsLVFbp3y34BHy3py1IuAtHB7WLypzjGZ7dU21dILaMjiwr4/E5UkFXnTQa76EB1So+Ul2/nURm9j7cQNzMaMWW1HWqjE/HG9b7nSbLRi30xdoVAM6HSFe66XwlTv7rRcd7QxhdBO/BDg/p8xcozZsSZZ9N0O+A8ab73zO/TLm8u7h2z/gmZIrZlSr6gp1IXLXiLk0Ycgb/jBgnEFK6xWvbpESaEBLP3RjRAYYo5IZNScxr4QwBCaDN7dkMKHWyO3ZsuHZyzxFwAzWaf6+CeCRC2Kyl7UOffGbZcLD37cBb0rlwOiGA57sugGJeXDCXIE33G2+Asyhfs93Uav3rvkJNRMmZO3vv0Qgd/GPi920ync1YeRalDEy1a/56xnM7U35nszK7v1lkO/5LgZ/vP81ArnbYa/5Lla8s2Hyen8wHoDxhMpvLxwQjDOZ5EIUyN4rOAFtHbDpcHIeru9KBoZRye0LhVsAGexzAtmV+Is7+ALDkl4e4qsSlZoHlay92f7NHXyB2cVtHriuS9/eluYEuszVWAPHS1Iwskg48L+5OJw6YE5mVW6dF94OCMb005ujLIGXusn/u2COvH/95R18gblA9dvJYwO1YBmjXJtojHf33UMZ+0METOolJK4X+7rWO6mosm82brm1uRsEjHmICNPBd2iHJLsUMOekT/8CgfyFoBN6p4mO+XFDbmDlXmr8p6IJGUw2brJJvnM9T++XG02GW+wXJXep/zVwV55sA5ITni0tuk+cETn+KzuYgbvzRDR5k/N1Dn8jJ1MXCvciipvLpfbXD85fHT4v2hQ+l22L4RWe2oP778CHjd7DkoubTt4BnwG1fvjXStS+gPZvofh++5OXuC53O/ILyb+jRDn44ptdOHwN9wKpz6HXyAtv/kURBLhK38s4ocnufxYKr3BY3IPhKtjtYV5K4+Wz9qK/A9MRX2ea/Js2QgjrWMhjnNI/UPxsE5bLRsD2UK+J7BCaYU8Rvm4P9d9ys0eMGDFixIgRI0aMGDFixIgRI0aMqMb/D038vtK1KWMAAAAASUVORK5CYII=" alt="" />
      </header>
      <nav className='nav'>
        <div><a href="#">Profile</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
      </nav>
      <div className='content'>
        <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="background" />
          <div className="profile">
            avatar + description
          </div>
          <div className="posts">
            Posts
            <div className="new-post">
              New Post
            </div>
            <div className="post-item">
              Post1
            </div>
            <div className="post-item">
              Post1
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
