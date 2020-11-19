import { getDictionariesApi } from './service';

export const dataDictionary: Record<string, any> = {};

export const initDataDictionary = async (namespace:string) => {
    const res:any = await getDictionariesApi({ namespace }).then(res => res.json());
    if(res.success){
        const { data={} } = res;
        // 数据字典赋值
        Object.keys(data).map(key => {
            const value = data[key];
            dataDictionary[key] = value;
        })
    }else{
        console.error('数据字典获取失败！')
    }
    
    
}