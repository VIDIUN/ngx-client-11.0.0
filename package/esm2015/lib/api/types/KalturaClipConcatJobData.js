/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObject } from './KalturaObject';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaClipConcatJobDataArgs() { }
/** @type {?|undefined} */
KalturaClipConcatJobDataArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaClipConcatJobDataArgs.prototype.priority;
/** @type {?|undefined} */
KalturaClipConcatJobDataArgs.prototype.operationAttributes;
export class KalturaClipConcatJobData extends KalturaJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.operationAttributes === 'undefined')
            this.operationAttributes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaClipConcatJobData' },
            partnerId: { type: 'n' },
            priority: { type: 'n' },
            operationAttributes: { type: 'a', subTypeConstructor: KalturaObject, subType: 'KalturaObject' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaClipConcatJobData.prototype.partnerId;
    /** @type {?} */
    KalturaClipConcatJobData.prototype.priority;
    /** @type {?} */
    KalturaClipConcatJobData.prototype.operationAttributes;
}
typesMappingStorage['KalturaClipConcatJobData'] = KalturaClipConcatJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2xpcENvbmNhdEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTdEUsTUFBTSwrQkFBZ0MsU0FBUSxjQUFjOzs7O0lBTXhELFlBQVksSUFBb0M7UUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztLQUN0Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtTQUMxRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdCB9IGZyb20gJy4vS2FsdHVyYU9iamVjdCc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdHByaW9yaXR5PyA6IG51bWJlcjtcblx0b3BlcmF0aW9uQXR0cmlidXRlcz8gOiBLYWx0dXJhT2JqZWN0W107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDbGlwQ29uY2F0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cHJpb3JpdHkgOiBudW1iZXI7XG5cdG9wZXJhdGlvbkF0dHJpYnV0ZXMgOiBLYWx0dXJhT2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDbGlwQ29uY2F0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wZXJhdGlvbkF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9wZXJhdGlvbkF0dHJpYnV0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2xpcENvbmNhdEpvYkRhdGEnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvcGVyYXRpb25BdHRyaWJ1dGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0LCBzdWJUeXBlIDogJ0thbHR1cmFPYmplY3QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDbGlwQ29uY2F0Sm9iRGF0YSddID0gS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhOyJdfQ==