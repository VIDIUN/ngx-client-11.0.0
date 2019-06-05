/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryCloneOptions } from './KalturaBaseEntryCloneOptions';
import { KalturaCloneComponentSelectorType } from './KalturaCloneComponentSelectorType';
import { KalturaBaseEntryCloneOptionItem } from './KalturaBaseEntryCloneOptionItem';
/**
 * @record
 */
export function KalturaBaseEntryCloneOptionComponentArgs() { }
/** @type {?|undefined} */
KalturaBaseEntryCloneOptionComponentArgs.prototype.itemType;
/** @type {?|undefined} */
KalturaBaseEntryCloneOptionComponentArgs.prototype.rule;
var KalturaBaseEntryCloneOptionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseEntryCloneOptionComponent, _super);
    function KalturaBaseEntryCloneOptionComponent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBaseEntryCloneOptionComponent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseEntryCloneOptionComponent' },
            itemType: { type: 'es', subTypeConstructor: KalturaBaseEntryCloneOptions, subType: 'KalturaBaseEntryCloneOptions' },
            rule: { type: 'es', subTypeConstructor: KalturaCloneComponentSelectorType, subType: 'KalturaCloneComponentSelectorType' }
        });
        return result;
    };
    return KalturaBaseEntryCloneOptionComponent;
}(KalturaBaseEntryCloneOptionItem));
export { KalturaBaseEntryCloneOptionComponent };
if (false) {
    /** @type {?} */
    KalturaBaseEntryCloneOptionComponent.prototype.itemType;
    /** @type {?} */
    KalturaBaseEntryCloneOptionComponent.prototype.rule;
}
typesMappingStorage['KalturaBaseEntryCloneOptionComponent'] = KalturaBaseEntryCloneOptionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeUNsb25lT3B0aW9uQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLCtCQUErQixFQUF1QyxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7QUFRekgsSUFBQTtJQUEwRCxnRUFBK0I7SUFLckYsOENBQVksSUFBZ0Q7ZUFFeEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUN2SCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtTQUNwSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQWxDTDtFQVkwRCwrQkFBK0IsRUF1QnhGLENBQUE7QUF2QkQsZ0RBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25zJztcbmltcG9ydCB7IEthbHR1cmFDbG9uZUNvbXBvbmVudFNlbGVjdG9yVHlwZSB9IGZyb20gJy4vS2FsdHVyYUNsb25lQ29tcG9uZW50U2VsZWN0b3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW0sIEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25JdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25Db21wb25lbnRBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW1BcmdzIHtcbiAgICBpdGVtVHlwZT8gOiBLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25zO1xuXHRydWxlPyA6IEthbHR1cmFDbG9uZUNvbXBvbmVudFNlbGVjdG9yVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhc2VFbnRyeUNsb25lT3B0aW9uQ29tcG9uZW50IGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUNsb25lT3B0aW9uSXRlbSB7XG5cbiAgICBpdGVtVHlwZSA6IEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbnM7XG5cdHJ1bGUgOiBLYWx0dXJhQ2xvbmVDb21wb25lbnRTZWxlY3RvclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkNvbXBvbmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25Db21wb25lbnQnIH0sXG5cdFx0XHRcdGl0ZW1UeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VFbnRyeUNsb25lT3B0aW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25zJyB9LFxuXHRcdFx0XHRydWxlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNsb25lQ29tcG9uZW50U2VsZWN0b3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDbG9uZUNvbXBvbmVudFNlbGVjdG9yVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJhc2VFbnRyeUNsb25lT3B0aW9uQ29tcG9uZW50J10gPSBLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25Db21wb25lbnQ7Il19