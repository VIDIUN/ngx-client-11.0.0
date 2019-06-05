/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { map, catchError } from 'rxjs/operators';
import { createEndpoint, getHeaders, prepareParameters } from './utils';
import { KalturaAPIException } from '../api/kaltura-api-exception';
import { KalturaClientException } from '../api/kaltura-client-exception';
export class KalturaMultiRequestAdapter {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    transmit(request, clientOptions, defaultRequestOptions) {
        /** @type {?} */
        const parameters = prepareParameters(request, clientOptions, defaultRequestOptions);
        /** @type {?} */
        const endpointUrl = createEndpoint(request, clientOptions, parameters['service'], parameters['action']);
        delete parameters['service'];
        delete parameters['action'];
        return this._http.request('post', endpointUrl, {
            body: parameters,
            headers: getHeaders()
        }).pipe(catchError(error => {
            /** @type {?} */
            const errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
            throw new KalturaClientException("client::multi-request-network-error", errorMessage || 'Error connecting to server');
        }), map(result => {
            try {
                return request.handleResponse(result);
            }
            catch (error) {
                if (error instanceof KalturaClientException || error instanceof KalturaAPIException) {
                    throw error;
                }
                else {
                    /** @type {?} */
                    const errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
                    throw new KalturaClientException('client::multi-response-unknown-error', errorMessage || 'Failed to parse response');
                }
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    KalturaMultiRequestAdapter.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1tdWx0aS1yZXF1ZXN0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYWRhcHRlcnMva2FsdHVyYS1tdWx0aS1yZXF1ZXN0LWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFPL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJekUsTUFBTTs7OztJQUNGLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FDcEM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBNEIsRUFBRyxhQUFtQyxFQUFFLHFCQUE0Qzs7UUFFckgsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztRQUVwRixNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEcsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFJNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQ3pDO1lBQ0ksSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLFVBQVUsRUFBRTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNQLFVBQVUsQ0FDTixLQUFLLENBQUMsRUFBRTs7WUFDSixNQUFNLFlBQVksR0FBRyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZHLE1BQU0sSUFBSSxzQkFBc0IsQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLElBQUksNEJBQTRCLENBQUMsQ0FBQztTQUN6SCxDQUNKLEVBQ0QsR0FBRyxDQUNDLE1BQU0sQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDO2dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pDO1lBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLHNCQUFzQixJQUFJLEtBQUssWUFBWSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7b0JBQ2xGLE1BQU0sS0FBSyxDQUFDO2lCQUNmO2dCQUFDLElBQUksQ0FBQyxDQUFDOztvQkFDSixNQUFNLFlBQVksR0FBRyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN2RyxNQUFNLElBQUksc0JBQXNCLENBQUMsc0NBQXNDLEVBQUUsWUFBWSxJQUFJLDBCQUEwQixDQUFDLENBQUM7aUJBQ3hIO2FBQ0o7U0FDSixDQUFDLENBQUMsQ0FBQztLQUNmO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7bWFwLCBjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEthbHR1cmFNdWx0aVJlcXVlc3QgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1tdWx0aS1yZXF1ZXN0JztcbmltcG9ydCB7IEthbHR1cmFNdWx0aVJlc3BvbnNlIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtbXVsdGktcmVzcG9uc2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY3JlYXRlRW5kcG9pbnQsIGdldEhlYWRlcnMsIHByZXBhcmVQYXJhbWV0ZXJzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBLYWx0dXJhQVBJRXhjZXB0aW9uIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtYXBpLWV4Y2VwdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtY2xpZW50LWV4Y2VwdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudE9wdGlvbnMgfSBmcm9tICcuLi9rYWx0dXJhLWNsaWVudC1vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNdWx0aVJlcXVlc3RBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gICAgdHJhbnNtaXQocmVxdWVzdDogS2FsdHVyYU11bHRpUmVxdWVzdCwgIGNsaWVudE9wdGlvbnM6IEthbHR1cmFDbGllbnRPcHRpb25zLCBkZWZhdWx0UmVxdWVzdE9wdGlvbnM6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8S2FsdHVyYU11bHRpUmVzcG9uc2U+IHtcblxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gcHJlcGFyZVBhcmFtZXRlcnMocmVxdWVzdCwgY2xpZW50T3B0aW9ucywgZGVmYXVsdFJlcXVlc3RPcHRpb25zKTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGNyZWF0ZUVuZHBvaW50KHJlcXVlc3QsIGNsaWVudE9wdGlvbnMsIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXSwgcGFyYW1ldGVyc1snYWN0aW9uJ10pO1xuICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1snc2VydmljZSddO1xuICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1snYWN0aW9uJ107XG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnJlcXVlc3QoJ3Bvc3QnLCBlbmRwb2ludFVybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGdldEhlYWRlcnMoKVxuICAgICAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKFwiY2xpZW50OjptdWx0aS1yZXF1ZXN0LW5ldHdvcmstZXJyb3JcIiwgZXJyb3JNZXNzYWdlIHx8ICdFcnJvciBjb25uZWN0aW5nIHRvIHNlcnZlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LmhhbmRsZVJlc3BvbnNlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uIHx8IGVycm9yIGluc3RhbmNlb2YgS2FsdHVyYUFQSUV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6bXVsdGktcmVzcG9uc2UtdW5rbm93bi1lcnJvcicsIGVycm9yTWVzc2FnZSB8fCAnRmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19