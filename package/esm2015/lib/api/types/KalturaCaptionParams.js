/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParams } from './KalturaAssetParams';
/**
 * @record
 */
export function KalturaCaptionParamsArgs() { }
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.language;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.label;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.format;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.sourceParamsId;
export class KalturaCaptionParams extends KalturaAssetParams {
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
            objectType: { type: 'c', default: 'KalturaCaptionParams' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            label: { type: 's' },
            format: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            sourceParamsId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCaptionParams.prototype.language;
    /** @type {?} */
    KalturaCaptionParams.prototype.isDefault;
    /** @type {?} */
    KalturaCaptionParams.prototype.label;
    /** @type {?} */
    KalturaCaptionParams.prototype.format;
    /** @type {?} */
    KalturaCaptionParams.prototype.sourceParamsId;
}
typesMappingStorage['KalturaCaptionParams'] = KalturaCaptionParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25QYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sMkJBQTRCLFNBQVEsa0JBQWtCOzs7O0lBUXhELFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM3RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM1RyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ2pHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtcywgS2FsdHVyYUFzc2V0UGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FwdGlvblBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zQXJncyB7XG4gICAgbGFuZ3VhZ2U/IDogS2FsdHVyYUxhbmd1YWdlO1xuXHRpc0RlZmF1bHQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRmb3JtYXQ/IDogS2FsdHVyYUNhcHRpb25UeXBlO1xuXHRzb3VyY2VQYXJhbXNJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXB0aW9uUGFyYW1zIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zIHtcblxuICAgIGxhbmd1YWdlIDogS2FsdHVyYUxhbmd1YWdlO1xuXHRpc0RlZmF1bHQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRsYWJlbCA6IHN0cmluZztcblx0Zm9ybWF0IDogS2FsdHVyYUNhcHRpb25UeXBlO1xuXHRzb3VyY2VQYXJhbXNJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhcHRpb25QYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhcHRpb25QYXJhbXMnIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZScgfSxcblx0XHRcdFx0aXNEZWZhdWx0IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25UeXBlJyB9LFxuXHRcdFx0XHRzb3VyY2VQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2FwdGlvblBhcmFtcyddID0gS2FsdHVyYUNhcHRpb25QYXJhbXM7Il19