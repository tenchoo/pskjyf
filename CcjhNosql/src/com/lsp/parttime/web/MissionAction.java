package com.lsp.parttime.web;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;

import com.lsp.hou.web.HoufaetAction;
import com.lsp.parttime.entity.Employee;
import com.lsp.parttime.entity.Mission;
import com.lsp.pub.dao.BaseDao;
import com.lsp.pub.db.MongoSequence;
import com.lsp.pub.entity.PubConstants;
import com.lsp.pub.util.Struts2Utils;
import com.lsp.pub.util.UniObject;
import com.lsp.pub.web.GeneralAction;
import com.mongodb.DBObject;

import net.sf.json.JSONArray;
/**
 * 任务管理
 * @author lsp
 *
 */
@Namespace("/parttime")
@Results({ @Result(name = HoufaetAction.RELOAD, location = "mission.action", params = {"fypage", "%{fypage}" }, type = "redirect") })
public class MissionAction extends GeneralAction<Mission>{

	private static final long serialVersionUID = -6784469775589971579L;
	@Autowired
	private BaseDao baseDao;
	private Mission entity = new Mission();
	private Long _id;

	private MongoSequence mongoSequence;

	@Autowired
	public void setMongoSequence(MongoSequence mongoSequence) {
		this.mongoSequence = mongoSequence;
	}

	@Override
	public Mission getModel() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String input() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String save() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String delete() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void prepareModel() throws Exception {
		// TODO Auto-generated method stub
		
	}
	/**
	 * 发布任务
	 */
	public void  createMiss() {
		getLocale();
		Map<String, Object>submap=new HashMap<String, Object>(); 
		submap.put("state", 1);
		String linktel=Struts2Utils.getParameter("linktel");
		String linkname=Struts2Utils.getParameter("linkname"); 
		String experience=Struts2Utils.getParameter("experience");
		String education=Struts2Utils.getParameter("education");
		String num=Struts2Utils.getParameter("num");
		String workaddress=Struts2Utils.getParameter("workaddress");
		String wages=Struts2Utils.getParameter("wages");
		try {
			Mission mission=new Mission();
			mission.set_id(mongoSequence.currval(PubConstants.PARTTIME_MISSION));
			mission.setFromid(fromUserid);
			mission.setCustid(custid);
			mission.setCreatedate(new Date());
			if (StringUtils.isNotEmpty(education)) {
				mission.setEducation(Integer.parseInt(education));
			}
			if (StringUtils.isNotEmpty(experience)) {
				mission.setExperience(Integer.parseInt(experience));
			}
			if (StringUtils.isNotEmpty(num)) {
				mission.setNum(Integer.parseInt(num));
			} 
			mission.setLinkname(linkname);
			mission.setLinktel(linktel);
			mission.setWages(wages);
			mission.setWorkaddress(workaddress);
			baseDao.insert(PubConstants.PARTTIME_MISSION, mission);
			submap.put("state", 0);
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String json = JSONArray.fromObject(submap).toString(); 
		Struts2Utils.renderJson(json.substring(1, json.length() - 1), new String[0]);
	}
	/**
	 * 首页
	 * @return
	 */
	public String index() {
		return "index";
	} 
	 
}
