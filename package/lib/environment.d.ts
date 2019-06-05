export interface Environment {
    request: {
        apiVersion: string;
    };
    response: {
        nestedResponse: boolean;
    };
}
export declare const environment: Environment;
