/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { map, catchError } from 'rxjs/operators';
import { KalturaAPIException } from '../api/kaltura-api-exception';
import { KalturaClientException } from '../api/kaltura-client-exception';
import { createEndpoint, getHeaders, prepareParameters } from './utils';
var KalturaRequestAdapter = /** @class */ (function () {
    function KalturaRequestAdapter(_http) {
        this._http = _http;
    }
    /**
     * @template T
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    KalturaRequestAdapter.prototype.transmit = /**
     * @template T
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    function (request, clientOptions, defaultRequestOptions) {
        /** @type {?} */
        var parameters = prepareParameters(request, clientOptions, defaultRequestOptions);
        /** @type {?} */
        var endpointUrl = createEndpoint(request, clientOptions, parameters['service'], parameters['action']);
        delete parameters['service'];
        delete parameters['action'];
        return this._http.request('post', endpointUrl, {
            body: parameters,
            headers: getHeaders()
        }).pipe(catchError(function (error) {
            /** @type {?} */
            var errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
            throw new KalturaClientException("client::request-network-error", errorMessage || 'Error connecting to server');
        }), map(function (result) {
            try {
                /** @type {?} */
                var response = request.handleResponse(result);
                if (response.error) {
                    throw response.error;
                }
                else {
                    return response.result;
                }
            }
            catch (error) {
                if (error instanceof KalturaClientException || error instanceof KalturaAPIException) {
                    throw error;
                }
                else {
                    /** @type {?} */
                    var errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
                    throw new KalturaClientException('client::response-unknown-error', errorMessage || 'Failed to parse response');
                }
            }
        }));
    };
    return KalturaRequestAdapter;
}());
export { KalturaRequestAdapter };
if (false) {
    /** @type {?} */
    KalturaRequestAdapter.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1yZXF1ZXN0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYWRhcHRlcnMva2FsdHVyYS1yZXF1ZXN0LWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFJeEUsSUFBQTtJQUVJLCtCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0tBQ3BDOzs7Ozs7OztJQUVNLHdDQUFROzs7Ozs7O2NBQUksT0FBMEIsRUFBRSxhQUFtQyxFQUFFLHFCQUE0Qzs7UUFFNUgsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztRQUVwRixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEcsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQ3pDO1lBQ0ksSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLFVBQVUsRUFBRTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNQLFVBQVUsQ0FDTixVQUFBLEtBQUs7O1lBQ0QsSUFBTSxZQUFZLEdBQUcsS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RyxNQUFNLElBQUksc0JBQXNCLENBQUMsK0JBQStCLEVBQUUsWUFBWSxJQUFJLDRCQUE0QixDQUFDLENBQUM7U0FDbkgsQ0FDSixFQUNELEdBQUcsQ0FDQyxVQUFBLE1BQU07WUFDRixJQUFJLENBQUM7O2dCQUNELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRWhELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQ3hCO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2lCQUMxQjthQUNKO1lBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLHNCQUFzQixJQUFJLEtBQUssWUFBWSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7b0JBQ2xGLE1BQU0sS0FBSyxDQUFDO2lCQUNmO2dCQUFDLElBQUksQ0FBQyxDQUFDOztvQkFDSixJQUFNLFlBQVksR0FBRyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN2RyxNQUFNLElBQUksc0JBQXNCLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxJQUFJLDBCQUEwQixDQUFDLENBQUM7aUJBQ2xIO2FBQ0o7U0FDSixDQUFDLENBQUMsQ0FBQzs7Z0NBekRwQjtJQTJEQyxDQUFBO0FBN0NELGlDQTZDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHttYXAsIGNhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0IH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtcmVxdWVzdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVzcG9uc2UgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1yZXNwb25zZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgS2FsdHVyYUFQSUV4Y2VwdGlvbiB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWFwaS1leGNlcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbiB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWNsaWVudC1leGNlcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3RPcHRpb25zLCBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtcmVxdWVzdC1vcHRpb25zJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnRPcHRpb25zIH0gZnJvbSAnLi4va2FsdHVyYS1jbGllbnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFbmRwb2ludCwgZ2V0SGVhZGVycywgcHJlcGFyZVBhcmFtZXRlcnMgfSBmcm9tICcuL3V0aWxzJztcblxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVxdWVzdEFkYXB0ZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc21pdDxUPihyZXF1ZXN0OiBLYWx0dXJhUmVxdWVzdDxUPiwgY2xpZW50T3B0aW9uczogS2FsdHVyYUNsaWVudE9wdGlvbnMsIGRlZmF1bHRSZXF1ZXN0T3B0aW9uczogS2FsdHVyYVJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHByZXBhcmVQYXJhbWV0ZXJzKHJlcXVlc3QsIGNsaWVudE9wdGlvbnMsIGRlZmF1bHRSZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBjcmVhdGVFbmRwb2ludChyZXF1ZXN0LCBjbGllbnRPcHRpb25zLCBwYXJhbWV0ZXJzWydzZXJ2aWNlJ10sIHBhcmFtZXRlcnNbJ2FjdGlvbiddKTtcbiAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXTtcbiAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ2FjdGlvbiddO1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucmVxdWVzdCgncG9zdCcsIGVuZHBvaW50VXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogZ2V0SGVhZGVycygpXG4gICAgICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oXCJjbGllbnQ6OnJlcXVlc3QtbmV0d29yay1lcnJvclwiLCBlcnJvck1lc3NhZ2UgfHwgJ0Vycm9yIGNvbm5lY3RpbmcgdG8gc2VydmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmhhbmRsZVJlc3BvbnNlKHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbiB8fCBlcnJvciBpbnN0YW5jZW9mIEthbHR1cmFBUElFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OnJlc3BvbnNlLXVua25vd24tZXJyb3InLCBlcnJvck1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBwYXJzZSByZXNwb25zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==