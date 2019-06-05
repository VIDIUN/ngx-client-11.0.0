/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { environment } from '../environment';
/**
 * @param {?} request
 * @param {?} options
 * @param {?} service
 * @param {?=} action
 * @return {?}
 */
export function createEndpoint(request, options, service, action) {
    /** @type {?} */
    var endpoint = options.endpointUrl;
    /** @type {?} */
    var clientTag = createClientTag(request, options);
    /** @type {?} */
    var result = endpoint + "/api_v3/service/" + service;
    if (action) {
        result += "/action/" + action;
    }
    if (clientTag) {
        result += "?" + _buildQuerystring({ clientTag: clientTag });
    }
    return result;
}
/**
 * @param {?} request
 * @param {?} options
 * @return {?}
 */
export function createClientTag(request, options) {
    /** @type {?} */
    var networkTag = (request.getNetworkTag() || "").trim();
    /** @type {?} */
    var clientTag = (options.clientTag || "").trim() || "ng-app";
    if (networkTag && networkTag.length) {
        return clientTag + "_" + networkTag;
    }
    else {
        return clientTag;
    }
}
/**
 * @param {?} data
 * @param {?=} prefix
 * @return {?}
 */
function _buildQuerystring(data, prefix) {
    /** @type {?} */
    var str = [];
    /** @type {?} */
    var p;
    for (p in data) {
        if (data.hasOwnProperty(p)) {
            /** @type {?} */
            var k = prefix ? prefix + "[" + p + "]" : p;
            /** @type {?} */
            var v = data[p];
            str.push((v !== null && typeof v === "object") ?
                _buildQuerystring(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
}
/**
 * @param {?} url
 * @param {?} querystring
 * @return {?}
 */
export function buildUrl(url, querystring) {
    /** @type {?} */
    var formattedUrl = (url).trim();
    /** @type {?} */
    var urlHasQuerystring = formattedUrl.indexOf('?') !== -1;
    /** @type {?} */
    var formattedQuerystring = _buildQuerystring(querystring);
    return "" + formattedUrl + (urlHasQuerystring ? '&' : '?') + formattedQuerystring;
}
/**
 * @return {?}
 */
export function getHeaders() {
    return {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };
}
/**
 * @param {?} request
 * @param {?} options
 * @param {?} defaultRequestOptions
 * @return {?}
 */
export function prepareParameters(request, options, defaultRequestOptions) {
    return Object.assign({}, request.buildRequest(defaultRequestOptions), {
        apiVersion: environment.request.apiVersion,
        format: 1
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYWRhcHRlcnMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFFN0MsTUFBTSx5QkFBMEIsT0FBMkIsRUFBRSxPQUE2QixFQUFFLE9BQWUsRUFBRSxNQUFlOztJQUMzSCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDOztJQUNyQyxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztJQUNwRCxJQUFJLE1BQU0sR0FBTSxRQUFRLHdCQUFtQixPQUFTLENBQUM7SUFFckQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sSUFBSSxhQUFXLE1BQVEsQ0FBQztLQUM5QjtJQUVELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNkLENBQUM7UUFDQSxNQUFNLElBQUksTUFBSSxpQkFBaUIsQ0FBQyxFQUFDLFNBQVMsV0FBQSxFQUFDLENBQUcsQ0FBQztLQUMvQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZDs7Ozs7O0FBRUQsTUFBTSwwQkFBMEIsT0FBMkIsRUFBRSxPQUE2Qjs7SUFFekYsSUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQzFELElBQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLENBQUM7SUFFL0QsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDcEMsQ0FBQztRQUNBLE1BQU0sQ0FBSSxTQUFTLFNBQUksVUFBWSxDQUFDO0tBQ3BDO0lBQUEsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ2pCO0NBQ0Q7Ozs7OztBQUVELDJCQUEyQixJQUFRLEVBQUUsTUFBZTs7SUFDbkQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFJOztJQUFoQixJQUFjLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDNUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBYzs7WUFBekQsSUFBNkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7S0FDRDtJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBRXJCOzs7Ozs7QUFHRCxNQUFNLG1CQUFtQixHQUFXLEVBQUUsV0FBZTs7SUFDakQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFDaEMsSUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztJQUMzRCxJQUFNLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELE1BQU0sQ0FBQyxLQUFHLFlBQVksSUFBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUcsb0JBQXNCLENBQUM7Q0FDbkY7Ozs7QUFFRCxNQUFNO0lBQ0wsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixjQUFjLEVBQUUsa0JBQWtCO0tBQ2xDLENBQUM7Q0FDRjs7Ozs7OztBQUVELE1BQU0sNEJBQTRCLE9BQXVFLEVBQUcsT0FBNkIsRUFBRyxxQkFBNEM7SUFFdkwsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ25CLEVBQUUsRUFDRixPQUFPLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEVBQzNDO1FBQ0MsVUFBVSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVTtRQUMxQyxNQUFNLEVBQUUsQ0FBQztLQUNULENBQ0QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3RCYXNlIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtcmVxdWVzdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnRPcHRpb25zIH0gZnJvbSAnLi4va2FsdHVyYS1jbGllbnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMsIEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYU11bHRpUmVxdWVzdCB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLW11bHRpLXJlcXVlc3QnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1yZXF1ZXN0JztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uICBjcmVhdGVFbmRwb2ludChyZXF1ZXN0OiBLYWx0dXJhUmVxdWVzdEJhc2UsIG9wdGlvbnM6IEthbHR1cmFDbGllbnRPcHRpb25zLCBzZXJ2aWNlOiBzdHJpbmcsIGFjdGlvbj86IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGVuZHBvaW50ID0gb3B0aW9ucy5lbmRwb2ludFVybDtcblx0Y29uc3QgY2xpZW50VGFnID0gY3JlYXRlQ2xpZW50VGFnKHJlcXVlc3QsIG9wdGlvbnMpO1xuXHRsZXQgcmVzdWx0ID0gYCR7ZW5kcG9pbnR9L2FwaV92My9zZXJ2aWNlLyR7c2VydmljZX1gO1xuXG5cdGlmIChhY3Rpb24pIHtcblx0XHRyZXN1bHQgKz0gYC9hY3Rpb24vJHthY3Rpb259YDtcblx0fVxuXG5cdGlmIChjbGllbnRUYWcpXG5cdHtcblx0XHRyZXN1bHQgKz0gYD8ke19idWlsZFF1ZXJ5c3RyaW5nKHtjbGllbnRUYWd9KX1gO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGllbnRUYWcocmVxdWVzdDogS2FsdHVyYVJlcXVlc3RCYXNlLCBvcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucylcbntcblx0Y29uc3QgbmV0d29ya1RhZyA9IChyZXF1ZXN0LmdldE5ldHdvcmtUYWcoKSB8fCBcIlwiKS50cmltKCk7XG5cdGNvbnN0IGNsaWVudFRhZyA9IChvcHRpb25zLmNsaWVudFRhZyB8fCBcIlwiKS50cmltKCkgfHwgXCJuZy1hcHBcIjtcblxuXHRpZiAobmV0d29ya1RhZyAmJiBuZXR3b3JrVGFnLmxlbmd0aClcblx0e1xuXHRcdHJldHVybiBgJHtjbGllbnRUYWd9XyR7bmV0d29ya1RhZ31gO1xuXHR9ZWxzZSB7XG5cdFx0cmV0dXJuIGNsaWVudFRhZztcblx0fVxufVxuXG5mdW5jdGlvbiBfYnVpbGRRdWVyeXN0cmluZyhkYXRhOiB7fSwgcHJlZml4Pzogc3RyaW5nKSB7XG5cdGxldCBzdHIgPSBbXSwgcDtcblx0Zm9yIChwIGluIGRhdGEpIHtcblx0XHRpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuXHRcdFx0bGV0IGsgPSBwcmVmaXggPyBwcmVmaXggKyBcIltcIiArIHAgKyBcIl1cIiA6IHAsIHYgPSBkYXRhW3BdO1xuXHRcdFx0c3RyLnB1c2goKHYgIT09IG51bGwgJiYgdHlwZW9mIHYgPT09IFwib2JqZWN0XCIpID9cblx0XHRcdFx0X2J1aWxkUXVlcnlzdHJpbmcodiwgaykgOlxuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoaykgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2KSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHIuam9pbihcIiZcIik7XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRVcmwodXJsOiBzdHJpbmcsIHF1ZXJ5c3RyaW5nOiB7fSkge1xuICAgIGxldCBmb3JtYXR0ZWRVcmwgPSAodXJsKS50cmltKCk7XG4gICAgY29uc3QgdXJsSGFzUXVlcnlzdHJpbmcgPSBmb3JtYXR0ZWRVcmwuaW5kZXhPZignPycpICE9PSAtMTtcbiAgICBjb25zdCBmb3JtYXR0ZWRRdWVyeXN0cmluZyA9IF9idWlsZFF1ZXJ5c3RyaW5nKHF1ZXJ5c3RyaW5nKTtcbiAgICByZXR1cm4gYCR7Zm9ybWF0dGVkVXJsfSR7dXJsSGFzUXVlcnlzdHJpbmcgPyAnJicgOiAnPyd9JHtmb3JtYXR0ZWRRdWVyeXN0cmluZ31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVhZGVycygpOiBhbnkge1xuXHRyZXR1cm4ge1xuXHRcdFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlUGFyYW1ldGVycyhyZXF1ZXN0OiBLYWx0dXJhUmVxdWVzdDxhbnk+IHwgS2FsdHVyYU11bHRpUmVxdWVzdCB8IEthbHR1cmFGaWxlUmVxdWVzdCwgIG9wdGlvbnM6IEthbHR1cmFDbGllbnRPcHRpb25zLCAgZGVmYXVsdFJlcXVlc3RPcHRpb25zOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnMpOiBhbnkge1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdHt9LFxuXHRcdHJlcXVlc3QuYnVpbGRSZXF1ZXN0KGRlZmF1bHRSZXF1ZXN0T3B0aW9ucyksXG5cdFx0e1xuXHRcdFx0YXBpVmVyc2lvbjogZW52aXJvbm1lbnQucmVxdWVzdC5hcGlWZXJzaW9uLFxuXHRcdFx0Zm9ybWF0OiAxXG5cdFx0fVxuXHQpO1xufVxuIl19