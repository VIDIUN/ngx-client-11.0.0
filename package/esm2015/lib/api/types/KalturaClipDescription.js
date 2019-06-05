/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaClipDescriptionArgs() { }
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.sourceEntryId;
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.duration;
/** @type {?|undefined} */
KalturaClipDescriptionArgs.prototype.offsetInDestination;
export class KalturaClipDescription extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaClipDescription' },
            sourceEntryId: { type: 's' },
            startTime: { type: 'n' },
            duration: { type: 'n' },
            offsetInDestination: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaClipDescription.prototype.sourceEntryId;
    /** @type {?} */
    KalturaClipDescription.prototype.startTime;
    /** @type {?} */
    KalturaClipDescription.prototype.duration;
    /** @type {?} */
    KalturaClipDescription.prototype.offsetInDestination;
}
typesMappingStorage['KalturaClipDescription'] = KalturaClipDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaXBEZXNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNsaXBEZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixNQUFNLDZCQUE4QixTQUFRLGlCQUFpQjs7OztJQU96RCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDbGlwRGVzY3JpcHRpb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgc291cmNlRW50cnlJZD8gOiBzdHJpbmc7XG5cdHN0YXJ0VGltZT8gOiBudW1iZXI7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcblx0b2Zmc2V0SW5EZXN0aW5hdGlvbj8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDbGlwRGVzY3JpcHRpb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBzb3VyY2VFbnRyeUlkIDogc3RyaW5nO1xuXHRzdGFydFRpbWUgOiBudW1iZXI7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRvZmZzZXRJbkRlc3RpbmF0aW9uIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2xpcERlc2NyaXB0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDbGlwRGVzY3JpcHRpb24nIH0sXG5cdFx0XHRcdHNvdXJjZUVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG9mZnNldEluRGVzdGluYXRpb24gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNsaXBEZXNjcmlwdGlvbiddID0gS2FsdHVyYUNsaXBEZXNjcmlwdGlvbjsiXX0=