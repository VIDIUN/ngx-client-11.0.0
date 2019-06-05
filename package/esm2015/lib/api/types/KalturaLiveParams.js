/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
/**
 * @record
 */
export function KalturaLiveParamsArgs() { }
/** @type {?|undefined} */
KalturaLiveParamsArgs.prototype.streamSuffix;
export class KalturaLiveParams extends KalturaFlavorParams {
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
            objectType: { type: 'c', default: 'KalturaLiveParams' },
            streamSuffix: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveParams.prototype.streamSuffix;
}
typesMappingStorage['KalturaLiveParams'] = KalturaLiveParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBT3JGLE1BQU0sd0JBQXlCLFNBQVEsbUJBQW1COzs7O0lBSXRELFlBQVksSUFBNkI7UUFFckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtcywgS2FsdHVyYUZsYXZvclBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB7XG4gICAgc3RyZWFtU3VmZml4PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zIHtcblxuICAgIHN0cmVhbVN1ZmZpeCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVQYXJhbXMnIH0sXG5cdFx0XHRcdHN0cmVhbVN1ZmZpeCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVBhcmFtcyddID0gS2FsdHVyYUxpdmVQYXJhbXM7Il19