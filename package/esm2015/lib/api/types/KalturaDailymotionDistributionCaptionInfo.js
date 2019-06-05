/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDailymotionDistributionCaptionAction } from './KalturaDailymotionDistributionCaptionAction';
import { KalturaDailymotionDistributionCaptionFormat } from './KalturaDailymotionDistributionCaptionFormat';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDailymotionDistributionCaptionInfoArgs() { }
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.language;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.action;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.format;
export class KalturaDailymotionDistributionCaptionInfo extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaDailymotionDistributionCaptionInfo' },
            language: { type: 's' },
            filePath: { type: 's' },
            remoteId: { type: 's' },
            action: { type: 'en', subTypeConstructor: KalturaDailymotionDistributionCaptionAction, subType: 'KalturaDailymotionDistributionCaptionAction' },
            version: { type: 's' },
            assetId: { type: 's' },
            format: { type: 'en', subTypeConstructor: KalturaDailymotionDistributionCaptionFormat, subType: 'KalturaDailymotionDistributionCaptionFormat' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.language;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.filePath;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.remoteId;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.action;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.version;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.assetId;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.format;
}
typesMappingStorage['KalturaDailymotionDistributionCaptionInfo'] = KalturaDailymotionDistributionCaptionInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUcsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxGLE1BQU0sZ0RBQWlELFNBQVEsaUJBQWlCOzs7O0lBVTVFLFlBQVksSUFBcUQ7UUFFN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJDQUEyQyxFQUFFO1lBQzlGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkNBQTJDLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQ25KLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJDQUEyQyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtTQUMxSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25Gb3JtYXQgfSBmcm9tICcuL0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25Gb3JtYXQnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGxhbmd1YWdlPyA6IHN0cmluZztcblx0ZmlsZVBhdGg/IDogc3RyaW5nO1xuXHRyZW1vdGVJZD8gOiBzdHJpbmc7XG5cdGFjdGlvbj8gOiBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uO1xuXHR2ZXJzaW9uPyA6IHN0cmluZztcblx0YXNzZXRJZD8gOiBzdHJpbmc7XG5cdGZvcm1hdD8gOiBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uRm9ybWF0O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uSW5mbyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGxhbmd1YWdlIDogc3RyaW5nO1xuXHRmaWxlUGF0aCA6IHN0cmluZztcblx0cmVtb3RlSWQgOiBzdHJpbmc7XG5cdGFjdGlvbiA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb247XG5cdHZlcnNpb24gOiBzdHJpbmc7XG5cdGFzc2V0SWQgOiBzdHJpbmc7XG5cdGZvcm1hdCA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25Gb3JtYXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24nIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uRm9ybWF0LCBzdWJUeXBlIDogJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25Gb3JtYXQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvJ10gPSBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uSW5mbzsiXX0=