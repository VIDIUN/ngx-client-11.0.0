/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaCodeCuePointArgs() { }
/** @type {?|undefined} */
KalturaCodeCuePointArgs.prototype.code;
/** @type {?|undefined} */
KalturaCodeCuePointArgs.prototype.description;
/** @type {?|undefined} */
KalturaCodeCuePointArgs.prototype.endTime;
export class KalturaCodeCuePoint extends KalturaCuePoint {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCodeCuePoint' },
            code: { type: 's' },
            description: { type: 's' },
            endTime: { type: 'n' },
            duration: { type: 'n', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCodeCuePoint.prototype.code;
    /** @type {?} */
    KalturaCodeCuePoint.prototype.description;
    /** @type {?} */
    KalturaCodeCuePoint.prototype.endTime;
    /** @type {?} */
    KalturaCodeCuePoint.prototype.duration;
}
typesMappingStorage['KalturaCodeCuePoint'] = KalturaCodeCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvZGVDdWVQb2ludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvZGVDdWVQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBU3pFLE1BQU0sMEJBQTJCLFNBQVEsZUFBZTs7OztJQU9wRCxZQUFZLElBQStCO1FBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50LCBLYWx0dXJhQ3VlUG9pbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb2RlQ3VlUG9pbnRBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEFyZ3Mge1xuICAgIGNvZGU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGVuZFRpbWU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29kZUN1ZVBvaW50IGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50IHtcblxuICAgIGNvZGUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRlbmRUaW1lIDogbnVtYmVyO1xuXHRyZWFkb25seSBkdXJhdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvZGVDdWVQb2ludEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29kZUN1ZVBvaW50JyB9LFxuXHRcdFx0XHRjb2RlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29kZUN1ZVBvaW50J10gPSBLYWx0dXJhQ29kZUN1ZVBvaW50OyJdfQ==