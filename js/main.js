$(function(){
//新增打开	
	$("#openadd").click(
		function(){
		$(".zhezhao").show();
	    $("#weihu_add").find(".dialog").show();
		}
	)

//关闭弹层
	$(".dialog-close").click(function(){
		$(".zhezhao").hide();
	    $(this).parent().parent(".dialog").hide();
	    $(this).parent().parent(".dialog").find(".input").val("");//清除文本框内容
	})


	
	
	
	
/*添加信息*/	
$("#add").click(function(){
	var addid=$("#addid").val();//客户编号
	var addtm=$("#addtm").val();//产品条码
	var addks=$("#addks").val();//款式
	var addgg=$("#addgg").val();//规格
	var addpj=$("#addpj").val();//偏距
	var addpcd=$("#addpcd").val();//PCD
	var addzxk=$("#addzxk").val();//中心孔
	var adddjz=$("#adddjz").val();//单净重
    var adddmz=$("#adddmz").val();//单毛重
	var addtj=$("#addtj").val();//单体积
	var addbmzt=$("#addbmzt").val();//表面状态	
	var str="";
	var xhid="";//序号
	str+="<tr>";
	str+="<td>"+xhid+"</td>";
	str+="<td>"+addid+"</td>";
	str+="<td>"+addtm+"</td>"; 
	str+="<td>"+addks+"</td>"; 	
	str+="<td>"+addgg+"</td>"; 	
	str+="<td>"+addpj+"</td>"; 	
	str+="<td>"+addpcd+"</td>"; 	
	str+="<td>"+addzxk+"</td>"; 	
	str+="<td>"+adddjz+"</td>"; 	
	str+="<td>"+adddmz+"</td>"; 	
	str+="<td>"+addtj+"</td>"; 	
	str+="<td>"+addbmzt+"</td>"; 	
	str+="<td><button class='button border-main bianji' onclick='openadd('weihu_update')'><span class='icon-edit'></span> 编辑</button><button class='button border-red shanchu'><span class='icon-trash-o'></span> 删除</button></td></tr>";
	str+="</tr>";
	
	var addurl="1.php";
	$.ajax({
        url:addurl,
        data:{
			 addid:addid, //客户编号
		     addtm:addtm,//产品条码
			 addks:addks,//款式
	 	     addgg:addgg,//规格
			 addpj:addpj,//偏距
			 addpcd:addpcd,//PCD
			 addzxk:addzxk,//中心孔
			 adddjz:adddjz,//单净重
		     adddmz:adddmz,//单毛重
			 addtj:addtj,//单体积
			 addbmzt:addbmzt,//表面状态		
		},
        type:'post',
        dataType:'json',
        success:function(data) {
            $("#add-infor").append(str);
			$(".zhezhao").hide();
		    $(this).parent().parent(".dialog").hide();
		    $(this).parent().parent(".dialog").find(".input").val("");//清除文本框内容
        },
        error : function() {
            alert("添加失败");
        }
    });
	
	$("#add-infor").append(str);	
	});//添加信息
	//alert (+addtm+addks+addgg+addpj+addpcd+addzxk+adddjz+adddmz+addtj+addbmzt);	

	
/*修改信息*/	
	

	
	
})