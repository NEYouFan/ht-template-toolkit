String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var args = process.argv.slice(2);
var git = 'ssh://git@g.hz.netease.com:22222/HeartTouchOpen/HTProjectTemplate.git';
var params = '';
var flag = false;
args.forEach(function (val, index, array) {
  if (val == '-git') {
  	flag = true;
  }else if (flag){
  	git = val;
  	flag = false;
  }else {
  	params = params + ' ' + val;
  }
});
params = params.replaceAll('=',' ');
if (params == ' -help' || params == ' -h') {
	console.log('opions:');
	console.log('-h／-help（可选） 	 	显示帮助信息');	
	console.log('-git（可选）			指定需要生成的模版仓库地址,不填则为默认模版地址');
	console.log('-o（可选）			指定输出到工程路径，默认为当前路径');
	console.log('-ProductName（必填）		生成工程的项目名称');
	console.log('-Prefix（必填）			生成工程的类名前缀');
	console.log('-CategoryPrefix（必填）		生成工程的类别里面所有方法的前缀');
	console.log('-Author（必填）			生成工程的作者名称');
	console.log('-w（可选）			是否覆盖已存在的文件，默认为false');	
	return;
}
console.log('git:' + git);
console.log('params: ' + params);
var exec = require('child_process').exec; 	
exec('pwd',function(err,stdout,stderr){
});

exec('mkdir HTTempplate',function(err,stdout,stderr){
});

exec('git clone '+git+' HTTempplate',function(err,stdout,stderr){
	console.log(stdout);
	if (!err) {
		console.log('git cloning...');
		exec('nei template -p ./HTTempplate/HTLocalProjectTemplate/' + params,function(err,stdout,stderr){
			if (!err) {
				exec('rm -rf HTTempplate',function(err,stdout,stderr){
					console.log(stdout);
					if (!err) {
						console.log('removing HTTempplate...');
						console.log('All Done!!!')
					} else {
						console.log('err in removing HTTempplate:' + err);
					}
				});				
		} else {
				console.log('err in nei:' + err);
			}
		});
		
	} else {
		console.log('err in git cloning:' + err);
	}
});




