/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaESearchRangeArgs() { }
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.greaterThanOrEqual;
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.lessThanOrEqual;
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.greaterThan;
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.lessThan;
export class KalturaESearchRange extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaESearchRange' },
            greaterThanOrEqual: { type: 'n' },
            lessThanOrEqual: { type: 'n' },
            greaterThan: { type: 'n' },
            lessThan: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchRange.prototype.greaterThanOrEqual;
    /** @type {?} */
    KalturaESearchRange.prototype.lessThanOrEqual;
    /** @type {?} */
    KalturaESearchRange.prototype.greaterThan;
    /** @type {?} */
    KalturaESearchRange.prototype.lessThan;
}
typesMappingStorage['KalturaESearchRange'] = KalturaESearchRange;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hSYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hSYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixNQUFNLDBCQUEyQixTQUFRLGlCQUFpQjs7OztJQU90RCxZQUFZLElBQStCO1FBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoUmFuZ2VBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZ3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0bGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0Z3JlYXRlclRoYW4/IDogbnVtYmVyO1xuXHRsZXNzVGhhbj8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoUmFuZ2UgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBncmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0Z3JlYXRlclRoYW4gOiBudW1iZXI7XG5cdGxlc3NUaGFuIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFJhbmdlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoUmFuZ2UnIH0sXG5cdFx0XHRcdGdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Z3JlYXRlclRoYW4gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGVzc1RoYW4gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hSYW5nZSddID0gS2FsdHVyYUVTZWFyY2hSYW5nZTsiXX0=