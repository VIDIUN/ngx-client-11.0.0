/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaQuizOutputType } from './KalturaQuizOutputType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function QuizGetUrlActionArgs() { }
/** @type {?} */
QuizGetUrlActionArgs.prototype.entryId;
/** @type {?} */
QuizGetUrlActionArgs.prototype.quizOutputType;
/**
 * Build request payload for service 'quiz' action 'getUrl'.
 *
 * Usage: sends a with an api request for pdf from quiz object
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'quiz' action 'getUrl'.
 *
 * Usage: sends a with an api request for pdf from quiz object
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
QuizGetUrlAction = /** @class */ (function (_super) {
    tslib_1.__extends(QuizGetUrlAction, _super);
    function QuizGetUrlAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    QuizGetUrlAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'quiz_quiz' },
            action: { type: 'c', default: 'getUrl' },
            entryId: { type: 's' },
            quizOutputType: { type: 'en', subTypeConstructor: KalturaQuizOutputType, subType: 'KalturaQuizOutputType' }
        });
        return result;
    };
    return QuizGetUrlAction;
}(KalturaRequest));
/**
 * Build request payload for service 'quiz' action 'getUrl'.
 *
 * Usage: sends a with an api request for pdf from quiz object
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { QuizGetUrlAction };
if (false) {
    /** @type {?} */
    QuizGetUrlAction.prototype.entryId;
    /** @type {?} */
    QuizGetUrlAction.prototype.quizOutputType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpekdldFVybEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUXVpekdldFVybEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXNDLDRDQUFzQjtJQUt4RCwwQkFBWSxJQUEyQjtlQUVuQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyx1Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7U0FDdEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQkEzQ0w7RUFvQnNDLGNBQWMsRUF3Qm5ELENBQUE7Ozs7Ozs7OztBQXhCRCw0QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFRdWl6T3V0cHV0VHlwZSB9IGZyb20gJy4vS2FsdHVyYVF1aXpPdXRwdXRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1aXpHZXRVcmxBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cXVpek91dHB1dFR5cGUgOiBLYWx0dXJhUXVpek91dHB1dFR5cGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdxdWl6JyBhY3Rpb24gJ2dldFVybCcuXG4gKlxuICogVXNhZ2U6IHNlbmRzIGEgd2l0aCBhbiBhcGkgcmVxdWVzdCBmb3IgcGRmIGZyb20gcXVpeiBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFF1aXpHZXRVcmxBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxzdHJpbmc+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHF1aXpPdXRwdXRUeXBlIDogS2FsdHVyYVF1aXpPdXRwdXRUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFF1aXpHZXRVcmxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3F1aXpfcXVpeicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFVybCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWl6T3V0cHV0VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFRdWl6T3V0cHV0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUXVpek91dHB1dFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==