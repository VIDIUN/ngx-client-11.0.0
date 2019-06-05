/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionParamsUpdateActionArgs() { }
/** @type {?} */
CaptionParamsUpdateActionArgs.prototype.id;
/** @type {?} */
CaptionParamsUpdateActionArgs.prototype.captionParams;
/**
 * Build request payload for service 'captionParams' action 'update'.
 *
 * Usage: Update Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
export class CaptionParamsUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCaptionParams', responseConstructor: KalturaCaptionParams });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionparams' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            captionParams: { type: 'o', subTypeConstructor: KalturaCaptionParams, subType: 'KalturaCaptionParams' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CaptionParamsUpdateAction.prototype.id;
    /** @type {?} */
    CaptionParamsUpdateAction.prototype.captionParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFvQzs7OztJQUsvRSxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRyxvQkFBb0IsRUFBRyxDQUFDLENBQUM7S0FDN0g7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1NBQ2xHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvblBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25QYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uUGFyYW1zVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRjYXB0aW9uUGFyYW1zIDogS2FsdHVyYUNhcHRpb25QYXJhbXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXB0aW9uUGFyYW1zJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBDYXB0aW9uIFBhcmFtcyBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXB0aW9uUGFyYW1zXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uUGFyYW1zVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhcHRpb25QYXJhbXM+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRjYXB0aW9uUGFyYW1zIDogS2FsdHVyYUNhcHRpb25QYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25QYXJhbXMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25QYXJhbXMgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhcHRpb25fY2FwdGlvbnBhcmFtcycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2FwdGlvblBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25QYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25QYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==