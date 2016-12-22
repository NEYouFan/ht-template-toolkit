## HTTemplate 安装步骤：

用nodejs 跑install.sh

参数定义如下：

| 参数名称 | 是否必须 |  描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| -h | 否 | 显示 template 命令帮助信息|  |
| -git | 否 | 指定需要生成的模版仓库地址 |  https://g.hz.netease.com/HeartTouchOpen/HTProjectTemplate.git|
| -o | 否 | 输出路径  |./ |
| -ProductName | 必填 | 项目名称 | |
| -Prefix | 必填 | 类名前缀（注意：不能填HT） | |
| -CategoryPrefix | 必填 | 类别里面所有方法的前缀 | |
| -Author | 必填 | 文件作者名字 | |
| -w | 否 | 是否覆盖已存在的文件 | false |


参考示例：
node install.js -git https://g.hz.netease.com/HeartTouchOpen/HTProjectTemplate.git  -o ./OutputFolder -w true -ProductName ProductName -Prefix TN -CategoryPrefix tn -Author AuthorName


### Step 2:
生成的工程模版内含有podfile文件，pod update之后就可以运行该模版工程了