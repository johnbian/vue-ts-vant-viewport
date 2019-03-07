import fetch from '@/assets/fetch';
/**
 * @author johnbian
 * @description 接口处理
 */
class API {

  /**
   * @author johnbian
   * @param tableId table页ID
   * @param typeId 新闻类型ID:1太平头条，2健康讲堂
   * @description 获取新闻列表
   */
  public async queryEssayList(pageNo: number, tableId: number, typeId: number): Promise<any> {
    const params = {
      pageNo,
      pageSize: 10,
      tableId,
      typeId,
    };
    const res = await fetch.post('/campaignsms/essay/queryEssayList', params);
    return res;
  }

  /**
   * @author johnbian
   * @param essayId 文章ID
   * @description 新闻详情查询请求
   */
  public async queryEssayDetail(essayId: number): Promise<any> {
    const params = {
      essayId,
    };
    const res = await fetch.post('/campaignsms/essay/queryEssayDetail', params);
    return res;
  }

}

const api =  new API();
export default api;
