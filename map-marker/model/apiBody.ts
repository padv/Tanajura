//FORMATO DO BODY DA CHAMADA DA API EXTERNA

export interface ApiBody {    
    resource_id: string;
    filters: {};
    fields: any[];
    limit: number;
}
