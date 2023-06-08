(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{390:function(t,e,v){"use strict";v.r(e);var _=v(1),S=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("如何选用NAS、OSS和EBS？")])]),t._v(" "),e("p",[t._v("本文介绍阿里云文件存储NAS与阿里云对象存储OSS、阿里云块存储EBS的区别，帮助您更好地选用阿里云文件存储NAS。")]),t._v(" "),e("p",[t._v("文件存储NAS提供简单、可伸缩弹性的共享文件存储，配合云服务器ECS弹性计算服务构建业务系统。 当您选择使用文件存储NAS、对象存储OSS或块存储EBS部署应用程序时，需要考虑诸多因素。")]),t._v(" "),e("p",[t._v("本文介绍文件存储NAS与对象存储OSS、块存储EBS的区别，帮助您更好地进行选择。")]),t._v(" "),e("p",[t._v("架构图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.addai.cn/blog/2022/6/2/202206021052111.png",alt:"架构图"}})]),t._v(" "),e("p",[e("strong",[t._v("文件存储NAS和对象存储OSS有什么不同？")])]),t._v(" "),e("p",[t._v("文件存储NAS和对象存储OSS的主要区别：您无需修改应用，即可直接像访问本地文件系统一样访问文件存储NAS。文件存储NAS提供高吞吐和高IOPS的同时支持文件的随机读写和在线修改。")]),t._v(" "),e("p",[t._v("对象存储OSS是比较新的存储类型，相对于文件存储目录树的组织形式，对象存储OSS采用扁平的文件组织形式，采用RESTFul API接口访问，不支持文件随机读写，主要适用于互联网架构的海量数据的上传下载和分发。")]),t._v(" "),e("p",[e("strong",[t._v("文件存储NAS和块存储EBS有什么不同？")])]),t._v(" "),e("p",[t._v("文件存储NAS相对于块存储EBS的主要区别：文件存储NAS可以同时支持上千个ECS客户端同时共享访问，提供高吞吐量。")]),t._v(" "),e("p",[t._v("块存储EBS是裸磁盘，挂载到ECS后不能被操作系统应用直接访问，需要格式化成文件系统（ext3、ext4、NTFS等）后才能被访问。块存储EBS的优势是性能高、时延低，适合于OLTP数据库、NoSQL数据库等IO密集型的高性能、低时延应用工作负载。但是块存储EBS无法实现容量弹性扩展，单盘最大容量为32TB，并且对共享访问的支持有限，需要配合类Oracle RAC、WSFC Windows故障转移集群等集群管理软件才能进行共享访问。因此，块存储EBS主要还是针对单ECS的高性能，低时延的存储产品。")]),t._v(" "),e("p",[e("strong",[t._v("访问比较：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("存储产品")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("时延")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("吞吐")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("访问模式")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("文件存储NAS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低时延（毫秒级）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("数百Gbps")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("上千个ECS通过POSIX接口并发访问，随机读写。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("对象存储OSS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("较低时延（几十毫秒级）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("数百Gbps")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数百万客户端通过Web并发，追加写。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("块存储EBS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("极低时延（微秒级）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("数十Gbps")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单ECS通过POSIX接口访问，随机读写。")])])])]),t._v(" "),e("p",[e("strong",[t._v("存储比较：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("文件存储NAS")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("对象存储OSS")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("块存储云盘")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("共享访问")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("上千台ECS同时挂载，并发访问同一个文件系统")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("百万台客户端向同一个存储空间并发上传下载文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("单台ECS访问")])]),t._v(" "),e("tr",[e("td",[t._v("协议接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("POSIX / NFS / SMB / MPI")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("RESTful API / SDK / 客户端")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("格式化后支持POSIX协议")])]),t._v(" "),e("tr",[e("td",[t._v("读写模式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("随机读写")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("顺序读写")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("随机读写")])]),t._v(" "),e("tr",[e("td",[t._v("存储结构")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("目录树")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("扁平结构")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("格式化后支持目录树")])]),t._v(" "),e("tr",[e("td",[t._v("最大容量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("10PiB")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无限")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("32TiB")])])])])])}),[],!1,null,null,null);e.default=S.exports}}]);