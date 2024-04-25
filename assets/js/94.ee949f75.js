(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{556:function(t,v,_){"use strict";_.r(v);var P=_(2),s=Object(P.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("TCP（传输控制协议）和UDP（用户数据报协议）是网络通信中的两种主要协议，它们在数据传输方面有着各自的优缺点，和合适的应用场景。")])]),t._v(" "),v("h1",{attrs:{id:"tcp和udp"}},[t._v("TCP和UDP")]),t._v(" "),v("h2",{attrs:{id:"名词解释"}},[t._v("名词解释")]),t._v(" "),v("h3",{attrs:{id:"tcp"}},[t._v("TCP")]),t._v(" "),v("p",[t._v("TCP（Transmission Control Protocol），传输控制协议，是一种可靠、面向字节流的通信协议，面向字节流就是把上面应用层交下来的数据看成无结构的字节流来按顺序发送。")]),t._v(" "),v("h3",{attrs:{id:"udp"}},[t._v("UDP")]),t._v(" "),v("p",[t._v("用户数据报协议UDP在传输数据之前不需要先建立连接， 不提供可靠交互。功能上，它只是在IP数据报的服务上增加了一点复用/分用和差错检测的功能。")]),t._v(" "),v("h2",{attrs:{id:"各自的优缺点"}},[t._v("各自的优缺点")]),t._v(" "),v("h3",{attrs:{id:"tcp-2"}},[t._v("TCP")]),t._v(" "),v("p",[t._v("TCP是面向连接的协议，需要在通信双方之间建立连接后才能进行数据传输。")]),t._v(" "),v("ul",[v("li",[t._v("可靠性：TCP通过三次握手建立连接，并使用确认窗口、重传机制和有序控制等机制确保数据的可靠传输。")]),t._v(" "),v("li",[t._v("稳定性：TCP在数据传输过程中进行流量控制和拥塞控制，避免网络拥塞和数据丢失，保证数据传输的稳定性。")]),t._v(" "),v("li",[t._v("效率：虽然TCP提供可靠的服务，但需要更多的开销，如确认窗口、重传机制以及有序控制等，这可能会消耗大量的时间。TCP占用系统资源较高，因为它维护所有的传输连接。")])]),t._v(" "),v("h3",{attrs:{id:"udp-2"}},[t._v("UDP")]),t._v(" "),v("p",[t._v("UDP是无连接的协议，不需要建立连接，可以直接发送数据。")]),t._v(" "),v("ul",[v("li",[t._v("速度：UDP是无状态的传输协议，没有TCP的确认应答等机制，因此数据传输速度较快。")]),t._v(" "),v("li",[t._v("安全性：由于UDP不提供TCP的确认应答等机制，因此在某些场景下，UDP的安全性相对较好。")]),t._v(" "),v("li",[t._v("可靠性：UDP不保证数据的可靠性，只是尽最大努力交付数据。如果网络质量不好，数据传输容易丢包。")])]),t._v(" "),v("h2",{attrs:{id:"应用场景"}},[t._v("应用场景")]),t._v(" "),v("p",[t._v("TCP协议的适用场景：如文件传输（如FTP、HTTP）、发送或接收邮件（如POP3、IMAP、SMTP）、远程登录（如TELNET、SSH）等。这些应用通常需要保证数据的准确到达，即使在网络条件较差的情况下也能通过重传机制保证数据的传输。")]),t._v(" "),v("p",[t._v("UDP协议的适用场景：在线游戏、音视频传输（如RTSP）、网络语音电话（如VoIP）等。在这些应用中，即使偶尔出现数据包丢失或乱序，也不会对用户体验造成太大的影响。")]),t._v(" "),v("p",[t._v("总的来说，TCP和UDP各有其优缺点和适用场景。TCP适用于需要高可靠性的数据传输场景，如文件传输和网页浏览，而UDP适用于实时性要求较高的应用，如视频会议和在线游戏。在选择使用哪种协议时，需要根据具体的应用需求和网络环境进行综合考虑。例如，对于需要保证数据完整性和顺序性的应用，通常选择TCP协议；而对于对实时性要求较高，但对数据准确性要求相对较低的应用，通常选择UDP协议。")]),t._v(" "),v("h2",{attrs:{id:"参考文章"}},[t._v("参考文章")]),t._v(" "),v("p",[v("a",{attrs:{href:"'https://zhuanlan.zhihu.com/p/587491575'"}},[t._v("OSI七层模型")])])])}),[],!1,null,null,null);v.default=s.exports}}]);