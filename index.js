/**
 * hexo-tag-tencent
 * https://github.com/HmyBmny/hexo-tag-tencent
 * Copyright (c) 2016, HmyBmny
 * Licensed under the MIT license.
 */

hexo.extend.tag.register('video', function(args){
    video_provider = args[0];
    var tag = ''
    var base_url = '',
    video_id = args[1];
    width = args[2];
    height = args[3];
    switch (video_provider) {
        case 'youku':
            base_url = 'http://player.youku.com/embed/',
            tag = '<iframe height=' + height  +' width=' + width +' src="' + base_url + video_id +'" frameborder=0 allowfullscreen></iframe>'
            break;
        case 'v_qq':
            var base_url = 'http://v.qq.com/iframe/player.html?vid=',
            tag = '<iframe frameborder="0" width="' + width +'" height="'+ height +'" src="' + base_url + video_id +'&tiny=0&auto=0" allowfullscreen></iframe>'
            break;
        default:
            tag = '<center><font color=red size=2>插入视频出错，<a href="https://github.com/HmyBmny/hexo-tag-tencent">hexo-tag-tencent</a>目前只能插入优酷以及腾讯的视频，其它的暂不支持，谢谢！</font></center>'
    }
    return tag
});
